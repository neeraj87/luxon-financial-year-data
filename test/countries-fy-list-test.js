const expect  = require("chai").expect;
const { DateTime } = require("luxon");

const { getFiscalYearsForGivenCountry } = require("../app");

describe("Fiscal years for a given country code", function() {

    it("should return future 5 fiscal years where the country code is US", function() {
        let result = getFiscalYearsForGivenCountry("US", "FUTURE", 5, "LOCALE");

        let expectedResult = [{
            "fyStart": "1/10/2022, 12:00 am",
            "fyEnd": "30/9/2023, 11:59 pm"
        }, {
            "fyStart": "1/10/2023, 12:00 am",
            "fyEnd": "30/9/2024, 11:59 pm"
        }, {
            "fyStart": "1/10/2024, 12:00 am",
            "fyEnd": "30/9/2025, 11:59 pm"
        }, {
            "fyStart": "1/10/2025, 12:00 am",
            "fyEnd": "30/9/2026, 11:59 pm"
        }, {
            "fyStart": "1/10/2026, 12:00 am",
            "fyEnd": "30/9/2027, 11:59 pm"
        }];

        expect(result).to.deep.equal(expectedResult);
    });

    it("should return past 15 fiscal years where the country code is IN", function() {
        let result = getFiscalYearsForGivenCountry("IN", "PAST", 15, "LOCALE");

        let expectedResult = [{
            "fyStart": "1/4/2020, 12:00 am",
            "fyEnd": "31/3/2021, 11:59 pm"
        }, {
            "fyStart": "1/4/2019, 12:00 am",
            "fyEnd": "31/3/2020, 11:59 pm"
        }, {
            "fyStart": "1/4/2018, 12:00 am",
            "fyEnd": "31/3/2019, 11:59 pm"
        }, {
            "fyStart": "1/4/2017, 12:00 am",
            "fyEnd": "31/3/2018, 11:59 pm"
        }, {
            "fyStart": "1/4/2016, 12:00 am",
            "fyEnd": "31/3/2017, 11:59 pm"
        }, {
            "fyStart": "1/4/2015, 12:00 am",
            "fyEnd": "31/3/2016, 11:59 pm"
        }, {
            "fyStart": "1/4/2014, 12:00 am",
            "fyEnd": "31/3/2015, 11:59 pm"
        }, {
            "fyStart": "1/4/2013, 12:00 am",
            "fyEnd": "31/3/2014, 11:59 pm"
        }, {
            "fyStart": "1/4/2012, 12:00 am",
            "fyEnd": "31/3/2013, 11:59 pm"
        }, {
            "fyStart": "1/4/2011, 12:00 am",
            "fyEnd": "31/3/2012, 11:59 pm"
        }, {
            "fyStart": "1/4/2010, 12:00 am",
            "fyEnd": "31/3/2011, 11:59 pm"
        }, {
            "fyStart": "1/4/2009, 12:00 am",
            "fyEnd": "31/3/2010, 11:59 pm"
        }, {
            "fyStart": "1/4/2008, 12:00 am",
            "fyEnd": "31/3/2009, 11:59 pm"
        }, {
            "fyStart": "1/4/2007, 12:00 am",
            "fyEnd": "31/3/2008, 11:59 pm"
        }, {
            "fyStart": "1/4/2006, 12:00 am",
            "fyEnd": "31/3/2007, 11:59 pm"
        }];

        expect(result).to.deep.equal(expectedResult);
    });

    it("should return error message if there is an incorrect country code", function() {
        let result = getFiscalYearsForGivenCountry("XYZABC", "FUTURE", 5, "LOCALE");

        let expectedResult = {success: false, message: "Incorrect country code. Unable to find any country with the code: XYZABC."};

        expect(result).to.deep.equal(expectedResult);
    });
});