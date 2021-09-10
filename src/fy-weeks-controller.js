const { DateTime } = require("luxon");
const dtFormater = require("../utilities/date-time-formater");
const fyEndController = require("./fy-end-controller");

exports.getFYWeeks = (fyStartDt, OUTPUT_FORMAT) => {
    let financialYearWeeks = [];
    let startDateUnformatted, endDateUnformatted;

    let fyEndDt = fyEndController.getFYEnd(fyStartDt, "MILLIS");

    startDateUnformatted = fyStartDt;
    endDateUnformatted = new DateTime(startDateUnformatted).endOf('week');

    financialYearWeeks.push({
        start: dtFormater.formatDtValue(startDateUnformatted, OUTPUT_FORMAT),
        end: dtFormater.formatDtValue(endDateUnformatted, OUTPUT_FORMAT)
    });

    while(dtFormater.formatDtValue(endDateUnformatted, "MILLIS") <= fyEndDt) {
        startDateUnformatted = new DateTime(endDateUnformatted).plus({minutes: 1});
        endDateUnformatted = new DateTime(startDateUnformatted).endOf('week');

        financialYearWeeks.push({
            start: dtFormater.formatDtValue(startDateUnformatted, OUTPUT_FORMAT),
            end: dtFormater.formatDtValue(endDateUnformatted, OUTPUT_FORMAT)
        });
    }

    //check if the last day of the last week is greater than the end of the fiscal year
    if(dtFormater.formatDtValue(endDateUnformatted, "MILLIS") > fyEndDt) {
        //cap the last day of the last week to the fiscal year end
        financialYearWeeks[financialYearWeeks.length-1].end = fyEndController.getFYEnd(fyStartDt, OUTPUT_FORMAT);
    }

    return financialYearWeeks;
};