const { DateTime } = require("luxon");

const fyMonthsController = require("./src/fy-months-controller");
const fyDaysController = require("./src/fy-days-controller");
const fyQuartersController = require("./src/fy-quarters-controller");

function getFiscalYearDateRanges(
    year,
    month,
    day,
    type,
    outputFormat
) {
    let fyRanges = [];
    let startFyDate = DateTime.fromObject({year: year, month: month, day: day, hour: 0, minute: 0, second: 0});

    switch (type) {
        case "DAYS":
            fyRanges = fyDaysController.getFYDays(startFyDate, outputFormat);
            break;
        case "MONTHS":
            fyRanges = fyMonthsController.getFYMonths(startFyDate, outputFormat);
            break;
        case "QUARTERS":
            fyRanges = fyQuartersController.getFYQuarters(startFyDate, outputFormat);
            break;
        default:
            fyRanges = [];
            break;
    }
    return fyRanges;
}

function getFiscalYearEnd() {
    console.log(`Coming Soon`);
}

module.exports = { getFiscalYearDateRanges, getFiscalYearEnd };