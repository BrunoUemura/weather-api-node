import { BadRequestError } from '../errors/BadRequestError';

export class WeatherService {
  async findByCity(city: string) {
    console.log(city);

    if (city === undefined) {
      throw new BadRequestError('City param missing');
    }

    return { message: `City is ${city}` };
  }
}
