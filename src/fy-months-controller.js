const { DateTime } = require("luxon");
const dtFormater = require("../utilities/date-time-formater");

exports.getFYMonths = (fyStartDt, OUTPUT_FORMAT) => {
    let financialYearMonths = [];
    let monthStartDateUnformatted, monthEndDateUnformatted;
    let startDate = fyStartDt.day;

    if(startDate > 1) {
        for (let index = 0; index < 12; index++) {
            if (index === 0) { //first month of financial year, just to start of the things
                monthStartDateUnformatted = fyStartDt;
            } else {
                monthStartDateUnformatted = new DateTime(monthEndDateUnformatted).plus({minutes: 1});
            }

            let numberOfDaysToAdd = getNumberOfDaysToAdd(monthStartDateUnformatted);
            monthEndDateUnformatted = new DateTime(monthStartDateUnformatted).plus({days: numberOfDaysToAdd}).endOf('day');

            financialYearMonths.push({
                start: dtFormater.formatDtValue(monthStartDateUnformatted, OUTPUT_FORMAT),
                end: dtFormater.formatDtValue(monthEndDateUnformatted, OUTPUT_FORMAT)
            });
        }
    } else {
        for (let index = 0; index < 12; index++) {
            if (index === 0) { //first month of financial year, just to start of the things
                monthStartDateUnformatted = fyStartDt;
            } else {
                monthStartDateUnformatted = new DateTime(monthEndDateUnformatted).plus({minutes: 1});
            }

            monthEndDateUnformatted = new DateTime(monthStartDateUnformatted).endOf('month');
    
            financialYearMonths.push({
                start: dtFormater.formatDtValue(monthStartDateUnformatted, OUTPUT_FORMAT),
                end: dtFormater.formatDtValue(monthEndDateUnformatted, OUTPUT_FORMAT)
            });
        }
    }
    
    return financialYearMonths;
};

function getNumberOfDaysToAdd(startDate) {
    return new DateTime(startDate).daysInMonth-1;
}