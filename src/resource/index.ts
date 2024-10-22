export class CountryResources {
  static readonly ALL_COUNTRIES = "AvailableCountries";

  static readonly getAllCountries = (): string => {
    return `${CountryResources.ALL_COUNTRIES}`;
  };
}
