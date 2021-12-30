import { Router } from 'express';
import { weather } from './weather.routes';
import { swagger } from './swagger.routes';

const routes = Router();
routes.use('/api/v1', weather, swagger);

export { routes };
