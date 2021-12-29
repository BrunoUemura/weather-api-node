import { BadRequestError } from '../errors/BadRequestError';
import { WeatherInterface } from '../interface/WeatherInterface';
import { WeatherRawInterface } from '../interface/WeatherRawInterface';
import { WeatherAPI } from './external/WeatherAPI';

export class WeatherService {
  async findByCity(city: string) {
    if (city === undefined) {
      throw new BadRequestError('City param missing');
    }

    const cityCapitalized = city.charAt(0).toUpperCase() + city.slice(1);

    const data: WeatherRawInterface = await WeatherAPI.fetchExternalAPI(
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
    };

    return result;
  }
}
