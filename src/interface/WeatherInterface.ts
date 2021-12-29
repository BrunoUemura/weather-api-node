export interface WeatherInterface {
  name: string | undefined;
  region: string | undefined;
  country: string | undefined;
  localTime: string | undefined;
  temperatureInC: number | undefined;
  temperatureInF: number | undefined;
  feelsLikeInC: number | undefined;
  feelsLikeInF: number | undefined;
  condition: string | undefined;
  humidity: number | undefined;
}
