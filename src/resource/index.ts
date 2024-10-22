export class CountryResources {
  static readonly ALL_COUNTRIES = "AvailableCountries";
  static readonly HOLIDAY = "NextPublicHolidays";

  static readonly getAllCountries = (): string => {
    return `${CountryResources.ALL_COUNTRIES}`;
  };

  static readonly getCountryHoliday = (code: string): string => {
    return `${CountryResources.HOLIDAY}/${code}`;
  };
}
