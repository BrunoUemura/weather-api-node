import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { router } from '../routes/WeatherRoutes';
import { errorHandler } from './errorHandler';

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(logger('dev'));
server.use(router);
server.use(errorHandler);

export { server };
