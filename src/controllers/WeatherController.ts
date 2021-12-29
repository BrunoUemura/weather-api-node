import { Request, Response, NextFunction } from 'express';
import { HttpStatusCodes } from '../enums/HttpStatusCodes';
import { WeatherService } from '../services/WeatherService';

export class WeatherController {
  static async findByCity(req: Request, res: Response, next: NextFunction) {
    const city = String(req.query.city);

    try {
      const service = new WeatherService();
      const result = await service.findByCity(city);
      return res.status(HttpStatusCodes.OK).send(result);
    } catch (error) {
      next(error);
    }
  }
}
