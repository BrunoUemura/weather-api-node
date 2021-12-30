import axios from 'axios';

export class WeatherAPI {
  static async fetchExternalAPI(city: string) {
    try {
      return await axios.get(`${process.env.WEATHER_API}&q=${city}`);
    } catch (error) {
      throw error;
    }
  }
}
