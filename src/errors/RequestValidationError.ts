import { ValidationError } from 'express-validator';
import { HttpStatusCodes } from '../enums/HttpStatusCodes';
import { CustomError } from './CustomError';

export class RequestValidationError extends CustomError {
  statusCode = HttpStatusCodes.BAD_REQUEST;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(error => {
      return {
        status: this.statusCode,
        message: error.msg,
        field: error.param,
      };
    });
  }
}
