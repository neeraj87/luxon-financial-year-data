
# luxon-financial-year-data

> This package provides easy way to get days, weeks, months and quarters for a given fiscal (financial) year.

## Features

1. Returns list of days within a given fiscal year
2. Returns list of months within a given fiscal year
3. Returns list of quarters within a given fiscal year

## Download/Install
```
npm i luxon-financial-year-data
```
### Methods/Options

1. Get Days/Weeks/Months/Quarters within a fiscal year
```
getFiscalYearDateRanges(year, month, day, type, outputFormat);
```
year = Numeric representation of start of a fiscal year
month = Month of beginning of fiscal year
day = Day of beginning of fiscal year
type = Type of output expected. Valid values are "DAYS", "WEEKS", "MONTHS", "QUARTERS". Defaults to sending empty list.
outputFormat = Output format for the result. Valid values are "MILLIS", "OBJECT", "LOCALE", "ISO", "JSON". Defaults to JS Object.

### Examples

1. Get list of days in a fiscal year in milliseconds
```
const fiscalYearData = require('luxon-financial-year-data');
let fiscalDays = fyData(2021, 04, 01, "DAYS", "MILLIS");
```

2. Get list of months in a fiscal year in locale format
```
const fiscalYearData = require('luxon-financial-year-data');
let fiscalMonths = fyData(2021, 04, 01, "MONTHS", "LOCALE");
```

3. Get list of quarters in a fiscal year in ISO format
```
const fiscalYearData = require('luxon-financial-year-data');
let fiscalMonths = fyData(2021, 04, 01, "QUARTERS", "LOCALE");
```
