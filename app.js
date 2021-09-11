const { DateTime } = require("luxon");

const fyMonthsController = require("./src/fy-months-controller");
const fyDaysController = require("./src/fy-days-controller");
const fyQuartersController = require("./src/fy-quarters-controller");
const fyWeeksController = require("./src/fy-weeks-controller");
const fyEndController = require("./src/fy-end-controller");
const countryFYController = require("./src/country-fiscal-years-controller");

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
        case "WEEKS":
            fyRanges = fyWeeksController.getFYWeeks(startFyDate, outputFormat);
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

function getFiscalYearEnd(
    year,
    month,
    day,
    outputFormat
) {
    let startFyDate = DateTime.fromObject({year: year, month: month, day: day, hour: 0, minute: 0, second: 0});
    return fyEndController.getFYEnd(startFyDate, outputFormat);
}

function getFiscalYearsForGivenCountry(
    countryISOCode,
    type,
    years,
    outputFormat
) {
    if(!countryISOCode) {
        return {success: false, message: "Missing first parameter countryISOCode"};
    }

    if(isNaN(years) || years < 1) {
        return {success: false, message: "Second parameter years needs to be a number greater than 0"};
    }

    if(years > 50) {
        return {success: false, message: "Second parameter years cannot exceed 50"};
    }

    if(!type) {
        type = "FUTURE";
    }

    return countryFYController.getFiscalYearsForGivenCountry(countryISOCode, type, years, outputFormat);
}

module.exports = { getFiscalYearDateRanges, getFiscalYearEnd, getFiscalYearsForGivenCountry };