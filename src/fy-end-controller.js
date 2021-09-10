const { DateTime } = require("luxon");
const dtFormater = require("../utilities/date-time-formater");

exports.getFYEnd = function(fyStartDt, OUTPUT_FORMAT) {
    return dtFormater.formatDtValue(
        new DateTime(fyStartDt).plus({years: 1}).minus({days: 1}).endOf('day'),
        OUTPUT_FORMAT
    );
};