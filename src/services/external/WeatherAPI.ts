import axios from 'axios';

export class WeatherAPI {
  static async fetchExternalAPI(city: string) {
    try {
      return await axios.get(`${process.env.WEATHER_API}&q=${city}&days=5`);
    } catch (error) {
      throw error;
    }
  }
}
