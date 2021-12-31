import { BadRequestError } from '../errors/BadRequestError';
import { WeatherInterface } from '../interface/WeatherInterface';
import { WeatherAPIResponse } from '../interface/WeatherRawInterface';
import { WeatherAPI } from './external/WeatherAPI';

export class WeatherService {
  async findByCity(city: string) {
    const cityCapitalized = city.charAt(0).toUpperCase() + city.slice(1);

    const { data }: WeatherAPIResponse = await WeatherAPI.fetchExternalAPI(
      cityCapitalized,
    );

    const result: WeatherInterface = {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      localTime: data.location.localtime,
      temperatureInC: data.current.temp_c,
      temperatureInF: data.current.temp_f,
      feelsLikeInC: data.current.feelslike_c,
      feelsLikeInF: data.current.feelslike_f,
      condition: data.current.condition.text,
      humidity: data.current.humidity,
      forecast: undefined,
    };

    result.forecast = data.forecast.forecastday.map(day => {
      return {
        date: day.date,
        maxTemperatureInC: day.day.maxtemp_c,
        maxTemperatureInF: day.day.maxtemp_f,
        minTemperatureInC: day.day.mintemp_c,
        minTemperatureInF: day.day.mintemp_f,
        avgTemperatureInC: day.day.avgtemp_c,
        avgTemperatureInf: day.day.avgtemp_f,
        condition: {
          text: day.day.condition.text,
          icon: day.day.condition.icon,
        },
      };
    });

    return result;
  }
}
