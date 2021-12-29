import { Request, Response, NextFunction } from 'express';
import { HttpStatusCodes } from '../enums/HttpStatusCodes';
import { CustomError } from '../errors/CustomError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
