import axios from 'axios';

export class WeatherAPI {
  static async fetchExternalAPI(city: string) {
    try {
      const { data } = await axios.get(`${process.env.WEATHER_API}&q=${city}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
