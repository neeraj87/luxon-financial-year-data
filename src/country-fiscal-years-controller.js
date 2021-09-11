const { DateTime } = require("luxon");
const fyEndController = require("./fy-end-controller"); 
const dtFormater = require("../utilities/date-time-formater");
const countriesFYList = require("../utilities/all-countries-fy-list.json");

exports.getFiscalYearsForGivenCountry = function(
    countryISOCode,
    type,
    years,
    outputFormat
) {
    let fyList = [];
    let fyInfo = getCurrentFYForGivenCountry(countryISOCode);
    
    if(!fyInfo) {
        return {success: false, message: `Incorrect country code. Unable to find any country with the code: ${countryISOCode}.`};
    }

    let inProcessFY = fyInfo.currentYear;

    let endBoundFY = type === "FUTURE" ? fyInfo.currentYear + years : fyInfo.currentYear - years;
    
    if(type === "FUTURE") {
        inProcessFY++;
        while(inProcessFY <= endBoundFY) {
            let startFyDate = DateTime.fromObject({year: inProcessFY, month: fyInfo.fyStartMonth, day: fyInfo.fyStartDay, hour: 0, minute: 0, second: 0});
    
            fyList.push({
                fyStart: dtFormater.formatDtValue(startFyDate, outputFormat),
                fyEnd: fyEndController.getFYEnd(startFyDate, outputFormat)
            });

            inProcessFY++;
        }
    } else {
        inProcessFY--;
        while(inProcessFY >= endBoundFY) {
            let startFyDate = DateTime.fromObject({year: inProcessFY, month: fyInfo.fyStartMonth, day: fyInfo.fyStartDay, hour: 0, minute: 0, second: 0});
    
            fyList.push({
                fyStart: dtFormater.formatDtValue(startFyDate, outputFormat),
                fyEnd: fyEndController.getFYEnd(startFyDate, outputFormat)
            });

            inProcessFY--;
        }
    }

    return fyList;
};

function getCurrentFYForGivenCountry(countryISOCode) {
    let matchingFYObj;

    //get the fy start object matching the country code
    countriesFYList.forEach(fyObj => {
        if(fyObj.isoCodes.some(code => code === countryISOCode)) {
            matchingFYObj = fyObj;
        }
    });

    if(!matchingFYObj) {
        return null;
    }

    return {
        fyStartDay: matchingFYObj.fyStartDay,
        fyStartMonth:  matchingFYObj.fyStartMonth,
        currentYear: DateTime.now().year
    };
}