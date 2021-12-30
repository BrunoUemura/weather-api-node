import request from 'supertest';
import { server } from '../../src/config/ServerConfig';
import { HttpStatusCodes } from '../../src/enums/HttpStatusCodes';

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...OLD_ENV };
});

afterAll(() => {
  process.env = OLD_ENV; // Restore old environment
});

describe('Pre Requisites Test', () => {
  it('should return missing param error', async () => {
    const result = await request(server).get(`/api/v1/weather?city=`);

    expect(result.statusCode).toBe(HttpStatusCodes.BAD_REQUEST);
    expect(result.body).toHaveProperty('errors');
    expect(result.body.errors[0].message).toBe('Missing city parameter');
  });

  it('should return external API Unavailable Error', async () => {
    process.env.WEATHER_API = 'http://api.weatherapi.com/v1/current.json';

    const city = 'calgary';
    const result = await request(server).get(`/api/v1/weather?city=${city}`);

    expect(result.statusCode).toBe(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    expect(result.body).toHaveProperty('errors');
    expect(result.body.errors[0].message).toBe(
      'External Weather API Unavailable',
    );
  });
});
