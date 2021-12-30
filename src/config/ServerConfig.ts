import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { routes } from '../routes';
import { errorHandler } from './errorHandler';

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(logger('dev'));
server.use(routes);
server.use(errorHandler);

export { server };
