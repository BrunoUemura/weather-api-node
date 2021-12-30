import { Router } from 'express';
import { WeatherController } from '../controllers/WeatherController';

const weather = Router();
weather.get('/weather', WeatherController.findByCity);

export { weather };
