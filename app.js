const { DateTime } = require("luxon");

//https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html#static-method-fromObject
//https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html#instance-method-toLocaleString
//

// DateTime.now();
// console.log(DateTime.fromMillis(1622269395858).plus({months: 12}).toLocaleString());
// console.log(DateTime.fromObject({year: 2021, month: 5, day: 29, hour: 0, minute: 0, second: 0}).plus({months: 12, hours: 8.3}).toLocaleString(DateTime.DATETIME_SHORT));

let startFyDate = DateTime.fromObject({year: 2021, month: 4, day: 1, hour: 0, minute: 0, second: 0});

let fyEndDt = getFYEndDateTime(startFyDate);

// console.log(formatDtValue(fyEndDt, "MILLIS"));
// console.log(formatDtValue(fyEndDt, "OBJECT"));
// console.log(formatDtValue(fyEndDt, "LOCALE"));
// console.log(formatDtValue(fyEndDt, "JSON"));
// console.log(formatDtValue(fyEndDt));

let fyMonths = getFYInMonths(startFyDate, fyEndDt, "LOCALE");
console.log(`fyMonths: ${JSON.stringify(fyMonths)}`);

function getFYInMonths(fyStartDt, fyEndDt, OUTPUT_FORMAT) {
    let financialYearMonths = [];

    for (let index = 0; index < 12; index++) {
        var monthStartDateUnformatted, monthEndDateUnformatted;
        if (index === 0) { //first month of financial year, just to start of the things
            monthStartDateUnformatted = fyStartDt;
            monthEndDateUnformatted = new DateTime(monthStartDateUnformatted).endOf('month');
        } else {
            monthStartDateUnformatted = new DateTime(monthEndDateUnformatted).plus({minutes: 1});
            monthEndDateUnformatted = new DateTime(monthStartDateUnformatted).endOf('month');
        }

        financialYearMonths.push({
            start: formatDtValue(monthStartDateUnformatted, OUTPUT_FORMAT),
            end: formatDtValue(monthEndDateUnformatted, OUTPUT_FORMAT)
        });
    }
    return financialYearMonths;
}

function getFYEndDateTime(fyStartDt) {
    //return DateTime.fromMillis(fyStartDt).plus({months: 12}).minus({days: 1}).plus({hours: 11, minutes: 59, seconds: 59});
    return new DateTime(fyStartDt).plus({months: 12}).minus({days: 1}).plus({hours: 11, minutes: 59, seconds: 59});
}

function formatDtValue(fyDtValue, OUTPUT_TYPE) {
    let formattedFYDt;

    switch (OUTPUT_TYPE) {
        case "MILLIS":
            formattedFYDt = fyDtValue.toMillis();
            break;
        case "OBJECT":
            formattedFYDt = fyDtValue.toObject();
            break;
        case "LOCALE":
            formattedFYDt = fyDtValue.toLocaleString(DateTime.DATETIME_SHORT);
            break;
        case "FORMATTED":
            formattedFYDt = fyDtValue.toFormat('DD-MM-YY HH:mm:ss');
            break;
        case "JSON":
            formattedFYDt = fyDtValue.toJSON();
            break;
        default:
            formattedFYDt = fyDtValue.toJSDate();
            break;
    }
    return formattedFYDt;
}