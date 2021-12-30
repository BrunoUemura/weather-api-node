import request from 'supertest';
import { server } from '../../src/config/ServerConfig';
import { HttpStatusCodes } from '../../src/enums/HttpStatusCodes';

describe('App functionallity test', () => {
  it('should return weather info for Calgary', async () => {
    const city = 'calgary';
    const result = await request(server).get(`/api/v1/weather?city=${city}`);

    console.log(result);

    expect(result.statusCode).toBe(HttpStatusCodes.OK);

    expect(result.body).toHaveProperty('name');
    expect(result.body.name).toBe('Calgary');

    expect(result.body).toHaveProperty('country');
    expect(result.body.country).toBe('Canada');
  });
});
