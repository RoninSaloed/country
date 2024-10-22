export class Routes {
  static readonly COUNTRY_HOLIDAYS = "Holidays";
  static readonly HOME = "Home";

  static readonly ABSOLUTE_COUNTRY_HOLIDAYS = `/${Routes.COUNTRY_HOLIDAYS}`;
  static readonly ABSOLUTE_HOME = `/${Routes.HOME}`;

  static readonly N_Holidays = "Holidays" as const;
  static readonly N_HOME = "Home" as const;
}
