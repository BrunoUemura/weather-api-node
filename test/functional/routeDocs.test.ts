import request from 'supertest';
import { server } from '../../src/config/ServerConfig';
import { HttpStatusCodes } from '../../src/enums/HttpStatusCodes';

describe('Documentation functionallity test', () => {
  it('should return documentation info', async () => {
    const result = await request(server).get('/api/v1/docs');
    expect(result.statusCode).toBe(HttpStatusCodes.MOVED_PERMANENTLY);
  });
});
