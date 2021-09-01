const { DateTime } = require("luxon");

exports.formatDtValue = (fyDtValue, OUTPUT_TYPE) => {
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
        case "ISO":
            formattedFYDt = fyDtValue.toISO();
            break;
        case "JSON":
            formattedFYDt = fyDtValue.toJSON();
            break;
        default:
            formattedFYDt = fyDtValue.toJSDate();
            break;
    }
    return formattedFYDt;
};