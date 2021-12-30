import { HttpStatusCodes } from '../enums/HttpStatusCodes';
import { CustomError } from './CustomError';

export class ServiceUnavailable extends CustomError {
  statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ServiceUnavailable.prototype);
  }

  serializeErrors() {
    return [{ status: this.statusCode, message: this.message }];
  }
}
