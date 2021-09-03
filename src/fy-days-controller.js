const { DateTime } = require("luxon");
const dtFormater = require("../utilities/date-time-formater");
const fyMonthsController = require("./fy-months-controller");

exports.getFYDays = (fyStartDt, OUTPUT_FORMAT) => {
    let financialYearDays = [];
    let startDateUnformatted, endDateUnformatted;
    let fyMonths = fyMonthsController.getFYMonths(fyStartDt, "MILLIS");

    let fyStartDay = fyMonths[0].start;
    let fyEndDay = fyMonths[fyMonths.length-1].end;

    startDateUnformatted = fyStartDt;
    endDateUnformatted = new DateTime(startDateUnformatted).endOf('day');

    financialYearDays.push({
        start: dtFormater.formatDtValue(startDateUnformatted, OUTPUT_FORMAT),
        end: dtFormater.formatDtValue(endDateUnformatted, OUTPUT_FORMAT)
    });

    while(dtFormater.formatDtValue(endDateUnformatted, "MILLIS") < fyEndDay) {
        startDateUnformatted = new DateTime(endDateUnformatted).plus({minutes: 1});
        endDateUnformatted = new DateTime(startDateUnformatted).endOf('day');

        financialYearDays.push({
            start: dtFormater.formatDtValue(startDateUnformatted, OUTPUT_FORMAT),
            end: dtFormater.formatDtValue(endDateUnformatted, OUTPUT_FORMAT)
        });
    }

    return financialYearDays;
};