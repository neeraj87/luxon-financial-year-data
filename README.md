# luxon-financial-year-data

> This package provides easy way to get days, weeks, months and quarters for a given fiscal (financial) year as well as list of fiscal years (past and future) for a given country (using ISO code).

## Features

1. Returns list of days within a given fiscal year

2. Returns list of weeks (week starts from Monday and ends on Sunday) within a given fiscal year

3. Returns list of months within a given fiscal year

4. Returns list of quarters within a given fiscal year

5. Returns n number of past or future fiscal years for a given country code

## Download/Install

```
npm i luxon-financial-year-data
```

### Methods/Options

1. Get Days/Weeks/Months/Quarters within a fiscal year

```
getFiscalYearDateRanges(year, month, day, type, outputFormat);
```
- year = Numeric representation of start of a fiscal year
- month = Month of beginning of fiscal year
- day = Day of beginning of fiscal year
- type = Type of output expected. Valid values are "DAYS", "WEEKS", "MONTHS", "QUARTERS". Defaults to sending empty list.
- outputFormat = Output format for the result. Valid values are "MILLIS", "OBJECT", "LOCALE", "ISO", "JSON". Defaults to JS Object.

2. Get N past or future fiscal years for a given country code

```
getFiscalYearsForGivenCountry(countryISOCode, type, years, outputFormat);
```
- countryISOCode = [Alpha 2 ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country codes
- type = "FUTURE", "PAST". FUTURE gives fiscal years in future from current year and PAST gives fiscal years in past from current year.
- years = Numeric value of number of past/future fiscal years needed.
- outputFormat = Output format for the result. Valid values are "MILLIS", "OBJECT", "LOCALE", "ISO", "JSON". Defaults to JS Object.

### Examples

1. Get list of days in a fiscal year in milliseconds

```
const { getFiscalYearDateRanges } = require('luxon-financial-year-data');
let fiscalDays = getFiscalYearDateRanges(2021, 04, 01, "DAYS", "MILLIS");
```

2. Get list of months in a fiscal year in locale format

```
const { getFiscalYearDateRanges } = require('luxon-financial-year-data');
let fiscalMonths = getFiscalYearDateRanges(2021, 04, 01, "MONTHS", "LOCALE");
```

3. Get list of quarters in a fiscal year in ISO format

```
const { getFiscalYearDateRanges } = require('luxon-financial-year-data');
let fiscalMonths = getFiscalYearDateRanges(2021, 04, 01, "QUARTERS", "LOCALE");
```
4. Get next (FUTURE) 5 fiscal years for US (United States)

```
const { getFiscalYearsForGivenCountry } = require('luxon-financial-year-data');
let fyList = getFiscalYearsForGivenCountry("US", "FUTURE", 5, "LOCALE");
```
5. Get previous (PAST) 10 fiscal years for AU (Australia)

```
const { getFiscalYearsForGivenCountry } = require('luxon-financial-year-data');
let fyList = getFiscalYearsForGivenCountry("AU", "PAST", 10, "LOCALE");
```