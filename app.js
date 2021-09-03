const { DateTime } = require("luxon");

const fyMonthsController = require("./src/fy-months-controller");
const fyDaysController = require("./src/fy-days-controller");
const fyQuartersController = require("./src/fy-quarters-controller");

//https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html#static-method-fromObject
//https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html#instance-method-toLocaleString
//

// DateTime.now();
// console.log(DateTime.fromMillis(1622269395858).plus({months: 12}).toLocaleString());
// console.log(DateTime.fromObject({year: 2021, month: 5, day: 29, hour: 0, minute: 0, second: 0}).plus({months: 12, hours: 8.3}).toLocaleString(DateTime.DATETIME_SHORT));

let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});

//console.log(new DateTime(startFyDate).plus({days: 30}).toLocaleString(DateTime.DATETIME_SHORT));

let fyEndDt = getFYEndDateTime(startFyDate);

// console.log(formatDtValue(fyEndDt, "MILLIS"));
// console.log(formatDtValue(fyEndDt, "OBJECT"));
// console.log(formatDtValue(fyEndDt, "LOCALE"));
// console.log(formatDtValue(fyEndDt, "JSON"));
// console.log(formatDtValue(fyEndDt));

// let fyMonths = fyMonthsController.getFYMonths(startFyDate, "LOCALE");
// console.log(`fyMonths: ${JSON.stringify(fyMonths)}`);

// let fyDays = fyDaysController.getFYDays(startFyDate, "LOCALE");
// console.log(`fyDays: ${JSON.stringify(fyDays)}`);

// let fyQuarters = fyQuartersController.getFYQuarters(startFyDate, "LOCALE");
// console.log(`fyQuarters: ${JSON.stringify(fyQuarters)}`);

//week bucket 1: Sunday > Saturday
//week bucket 2: Monday > Sunday
//week bucket 3: Saturday > Friday
// function getFYInWeeks(fyStartDt, fyEndDt, OUTPUT_FORMAT) {
//     let financialYearWeeks = [];

//     for (let index = 0; index < 52; index++) {
//         var weekStartDate, weekEndDate;
//         if(index === 0) {
//             weekStartDate = fyStartDt;
//             weekEndDate = new DateTime(weekStartDate).endOf('week');
//         } else {
//             weekStartDate = new DateTime(weekEndDate).plus({minutes: 1});
//             weekEndDate = new DateTime(weekStartDate).endOf('week');
//         }

//         financialYearWeeks.push({
//             start: dtFormater.formatDtValue(weekStartDate, OUTPUT_FORMAT),
//             end: dtFormater.formatDtValue(weekEndDate, OUTPUT_FORMAT)
//         });
//     }
//     return financialYearWeeks;
// }

function getFYEndDateTime(fyStartDt) {
    //return DateTime.fromMillis(fyStartDt).plus({months: 12}).minus({days: 1}).plus({hours: 11, minutes: 59, seconds: 59});
    return new DateTime(fyStartDt).plus({months: 12}).minus({days: 1}).plus({hours: 11, minutes: 59, seconds: 59});
}
