import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerConfig } from '../config/SwaggerConfig';

const swagger = Router();
swagger.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

export { swagger };
