import { Request } from 'express';
import { HttpStatusCodes } from '../../enums/HttpStatusCodes';
import { BadRequestError } from '../../errors/BadRequestError';
import { ServiceUnavailable } from '../../errors/ServiceUnavailable';
import { WeatherAPI } from '../external/WeatherAPI';

export class PreReqValidation {
  public static async execute(req: Request) {
    try {
      this.paramsValidation(req);
      await this.checkExternalAPI(req);
    } catch (error) {
      throw error;
    }
  }

  private static paramsValidation(req: Request) {
    if (req.query.city === undefined || req.query.city === '') {
      throw new BadRequestError('Missing city parameter');
    }
  }

  private static async checkExternalAPI(req: Request) {
    try {
      return await WeatherAPI.fetchExternalAPI(
        `${process.env.WEATHER_API}&q=${req.query.city}`,
      );
    } catch (error: any) {
      if (error.response.status !== HttpStatusCodes.OK) {
        throw new ServiceUnavailable('External Weather API Unavailable');
      }
    }
  }
}
