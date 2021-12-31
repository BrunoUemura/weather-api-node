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
  forecast: WeatherForcast[] | undefined;
}

interface WeatherForcast {
  date: string;
  maxTemperatureInC: number;
  maxTemperatureInF: number;
  minTemperatureInC: number;
  minTemperatureInF: number;
  avgTemperatureInC: number;
  avgTemperatureInf: number;
  condition: {
    text: string;
    icon: string;
  };
}
