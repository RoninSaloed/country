export class CountryResources {
  static readonly ALL_COUNTRIES = "AvailableCountries";
  static readonly HOLIDAY = "NextPublicHolidays";
  static readonly PUBLIC_HOLIDAYS = "PublicHolidays";
  static readonly getAllCountries = (): string => {
    return `${CountryResources.ALL_COUNTRIES}`;
  };

  static readonly getCountryHoliday = (code: string): string => {
    return `${CountryResources.HOLIDAY}/${code}`;
  };

  static readonly getCountryHolidaysListOnYear = (
    code: string,
    year: string
  ): string => {
    return `${CountryResources.PUBLIC_HOLIDAYS}/${year}/${code}`;
  };
}
