import { Router } from 'express';
import { WeatherController } from '../controllers/WeatherController';

const router = Router();

router.get('/api/v1/weather', WeatherController.findByCity);

export { router };
