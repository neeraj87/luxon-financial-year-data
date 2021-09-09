const expect  = require("chai").expect;
const { DateTime } = require("luxon");
const dtformater = require("../utilities/date-time-formater");

describe("Utilities", function() {

    describe("Date Time Formatter", function() {

        it("should return formatted date time in milliseconds", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});
            let result = dtformater.formatDtValue(startFyDate, "MILLIS");
            expect(result).to.equal(1617215400000);
        });

        it("should return formatted date time in luxon object", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});
            let result = dtformater.formatDtValue(startFyDate, "OBJECT");
            expect(result).to.deep.equal({"year":2021,"month":4,"day":1,"hour":0,"minute":0,"second":0,"millisecond":0});
        });

        it("should return formatted date time in locale", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});
            let result = dtformater.formatDtValue(startFyDate, "LOCALE");
            expect(result).to.equal("1/4/2021, 12:00 am");
        });

        it("should return formatted date time in iso", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});
            let result = dtformater.formatDtValue(startFyDate, "ISO");
            expect(result).to.equal("2021-04-01T00:00:00.000+05:30");
        });

        it("should return formatted date time in json", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});
            let result = dtformater.formatDtValue(startFyDate, "JSON");
            expect(result).to.equal("2021-04-01T00:00:00.000+05:30");
        });

        it("should return luxon object as default formatted result when format type is not specified", function() {
            let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});
            let result = dtformater.formatDtValue(startFyDate);
            expect(result).to.deep.equal({"year":2021,"month":4,"day":1,"hour":0,"minute":0,"second":0,"millisecond":0});
        });
    });
});
