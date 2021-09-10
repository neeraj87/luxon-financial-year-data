const expect  = require("chai").expect;
const { DateTime } = require("luxon");

const fyDaysController = require("../src/fy-days-controller");
const fyMonthsController = require("../src/fy-months-controller");
const fyQuartersController = require("../src/fy-quarters-controller");
const fyWeeksController = require("../src/fy-weeks-controller");
const fyEndController = require("../src/fy-end-controller");

const fyDaysResult = require("./expected-outputs/fyDays.json");
const fyDaysNotStartingFromFirstResult = require("./expected-outputs/fyDaysNotStartingFromFirst.json");
const fyWeeksExpectedResult = require("./expected-outputs/fyWeeks.json");

describe("Fiscal Year Date Ranges", function() {

    describe("Days within a given fiscal year", function() {

        it("should returns all days within a given fiscal year that starts from first of a month", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});

            let fyDays = fyDaysController.getFYDays(startFyDate, "LOCALE");

            expect(fyDays).to.deep.equal(fyDaysResult);
        });

        it("should returns all days within a given fiscal year that does not starts from first of a month", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 3, day: 21, hour: 0, minute: 0, second: 0});

            let fyDays = fyDaysController.getFYDays(startFyDate, "LOCALE");

            expect(fyDays).to.deep.equal(fyDaysNotStartingFromFirstResult);
        });
    });

    describe("Weeks within a given fiscal year", function() {

        it("should return all the weeks within a given fiscal year", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 1, day: 1, hour: 0, minute: 0, second: 0});

            let fyWeeks = fyWeeksController.getFYWeeks(startFyDate, "LOCALE");

            expect(fyWeeks).to.deep.equal(fyWeeksExpectedResult);
        });
    });

    describe("Months within a given fiscal year", function() {

        it("should return all the months within a given fiscal year", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});

            let fyMonths = fyMonthsController.getFYMonths(startFyDate, "LOCALE");

            let expectedResult = [{
                "start": "1/4/2021, 12:00 am",
                "end": "30/4/2021, 11:59 pm"
            }, {
                "start": "1/5/2021, 12:00 am",
                "end": "31/5/2021, 11:59 pm"
            }, {
                "start": "1/6/2021, 12:00 am",
                "end": "30/6/2021, 11:59 pm"
            }, {
                "start": "1/7/2021, 12:00 am",
                "end": "31/7/2021, 11:59 pm"
            }, {
                "start": "1/8/2021, 12:00 am",
                "end": "31/8/2021, 11:59 pm"
            }, {
                "start": "1/9/2021, 12:00 am",
                "end": "30/9/2021, 11:59 pm"
            }, {
                "start": "1/10/2021, 12:00 am",
                "end": "31/10/2021, 11:59 pm"
            }, {
                "start": "1/11/2021, 12:00 am",
                "end": "30/11/2021, 11:59 pm"
            }, {
                "start": "1/12/2021, 12:00 am",
                "end": "31/12/2021, 11:59 pm"
            }, {
                "start": "1/1/2022, 12:00 am",
                "end": "31/1/2022, 11:59 pm"
            }, {
                "start": "1/2/2022, 12:00 am",
                "end": "28/2/2022, 11:59 pm"
            }, {
                "start": "1/3/2022, 12:00 am",
                "end": "31/3/2022, 11:59 pm"
            }];

            expect(fyMonths).to.deep.equal(expectedResult);
        });
        
    });

    describe("Quarters within a given fiscal year", function() {

        it("should return all the quarters within a given fiscal year", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});

            let fyQuarters = fyQuartersController.getFYQuarters(startFyDate, "LOCALE");

            let expectedResult = [{
                "quarter": 1,
                "start": "1/4/2021, 12:00 am",
                "end": "30/6/2021, 11:59 pm",
                "monthsInThisQuarter": [{
                    "start": "1/4/2021, 12:00 am",
                    "end": "30/4/2021, 11:59 pm"
                }, {
                    "start": "1/5/2021, 12:00 am",
                    "end": "31/5/2021, 11:59 pm"
                }, {
                    "start": "1/6/2021, 12:00 am",
                    "end": "30/6/2021, 11:59 pm"
                }]
            }, {
                "quarter": 2,
                "start": "1/7/2021, 12:00 am",
                "end": "30/9/2021, 11:59 pm",
                "monthsInThisQuarter": [{
                    "start": "1/7/2021, 12:00 am",
                    "end": "31/7/2021, 11:59 pm"
                }, {
                    "start": "1/8/2021, 12:00 am",
                    "end": "31/8/2021, 11:59 pm"
                }, {
                    "start": "1/9/2021, 12:00 am",
                    "end": "30/9/2021, 11:59 pm"
                }]
            }, {
                "quarter": 3,
                "start": "1/10/2021, 12:00 am",
                "end": "31/12/2021, 11:59 pm",
                "monthsInThisQuarter": [{
                    "start": "1/10/2021, 12:00 am",
                    "end": "31/10/2021, 11:59 pm"
                }, {
                    "start": "1/11/2021, 12:00 am",
                    "end": "30/11/2021, 11:59 pm"
                }, {
                    "start": "1/12/2021, 12:00 am",
                    "end": "31/12/2021, 11:59 pm"
                }]
            }, {
                "quarter": 4,
                "start": "1/1/2022, 12:00 am",
                "end": "31/3/2022, 11:59 pm",
                "monthsInThisQuarter": [{
                    "start": "1/1/2022, 12:00 am",
                    "end": "31/1/2022, 11:59 pm"
                }, {
                    "start": "1/2/2022, 12:00 am",
                    "end": "28/2/2022, 11:59 pm"
                }, {
                    "start": "1/3/2022, 12:00 am",
                    "end": "31/3/2022, 11:59 pm"
                }]
            }];

            expect(fyQuarters).to.deep.equal(expectedResult);
        });
    });

    describe("Fiscal Year End Date", function() {
        it("should return the end date of fiscal year where the day starts from first of a month", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});
    
            let fyEndDt = fyEndController.getFYEnd(startFyDate, "LOCALE");
    
            expect(fyEndDt).to.equal("31/3/2022, 11:59 pm");
        });

        it("should return the end date of fiscal year where the day does not start from first of a month", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 6, hour: 0, minute: 0, second: 0});
    
            let fyEndDt = fyEndController.getFYEnd(startFyDate, "LOCALE");
    
            expect(fyEndDt).to.equal("5/4/2022, 11:59 pm");
        });
    });
});