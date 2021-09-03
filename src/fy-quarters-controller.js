const { DateTime } = require("luxon");
const dtFormater = require("../utilities/date-time-formater");
const fyMonthsController = require("./fy-months-controller");

exports.getFYQuarters = (fyStartDt, OUTPUT_FORMAT) => {
    let financialYearQuarters = [];
    
    let fyMonths = fyMonthsController.getFYMonths(fyStartDt, OUTPUT_FORMAT);

    //first quarter
    financialYearQuarters.push({
        quarter: 1,
        start: fyMonths[0].start,
        end: fyMonths[2].end,
        monthsInThisQuarter: [fyMonths[0], fyMonths[1], fyMonths[2]]
    });

    //second quarter
    financialYearQuarters.push({
        quarter: 2,
        start: fyMonths[3].start,
        end: fyMonths[5].end,
        monthsInThisQuarter: [fyMonths[3], fyMonths[4], fyMonths[5]]
    });

    //third quarter
    financialYearQuarters.push({
        quarter: 3,
        start: fyMonths[6].start,
        end: fyMonths[8].end,
        monthsInThisQuarter: [fyMonths[6], fyMonths[7], fyMonths[8]]
    });

    //fourth quarter
    financialYearQuarters.push({
        quarter: 4,
        start: fyMonths[9].start,
        end: fyMonths[11].end,
        monthsInThisQuarter: [fyMonths[9], fyMonths[10], fyMonths[11]]
    });

    return financialYearQuarters;
};