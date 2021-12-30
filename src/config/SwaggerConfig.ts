export const swaggerConfig = {
  swagger: '2.0',
  info: {
    description: 'Node JS application to retrieve weather details from city',
    version: '1.0.0',
    title: 'Weather API',
  },
  tags: [
    {
      name: 'Bruno Uemura',
      description: '',
    },
  ],
  schemes: ['http'],
  paths: {
    '/api/v1/weather': {
      get: {
        tags: ["Group's name"],
        description: 'Returns weather details from specific city',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'query',
            name: 'city',
            type: 'string',
            description: 'City name',
          },
        ],
        responses: {
          '200': {
            description:
              'If the code runs without error, you should get 200 response and an output JSON in the format as shown below.',
            schema: {
              $ref: '#/definitions/Http200',
            },
          },
          '400': {
            description:
              'If query parameters is not provided it will return status 400 and the JSON object as shown below.',
            schema: {
              $ref: '#/definitions/Http400',
            },
          },
          '500': {
            description:
              'If the extenal weather api id unavailable it will return status 500 and the JSON object as shown below.',
            schema: {
              $ref: '#/definitions/Http500',
            },
          },
        },
      },
    },
  },
  definitions: {
    Http200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Calgary',
          },
          region: {
            type: 'string',
            example: 'Alberta',
          },
          country: {
            type: 'string',
            example: 'Canada',
          },
          localTime: {
            type: 'string',
            example: '2021-12-29 21:49',
          },
          temperatureInC: {
            type: 'number',
            example: -22,
          },
          temperatureInF: {
            type: 'number',
            example: -7.6,
          },
          feelsLikeInC: {
            type: 'number',
            example: -28.1,
          },
          feelsLikeInF: {
            type: 'number',
            example: -18.6,
          },
          condition: {
            type: 'string',
            example: 'Partly cloudy',
          },
          humidity: {
            type: 'number',
            example: 70,
          },
        },
      },
    },
    Http400: {
      type: 'object',
      properties: {
        error: {
          type: 'array',
          items: {
            properties: {
              status: {
                type: 'number',
                example: 400,
              },
              message: {
                type: 'string',
                example: 'Missing city parameter',
              },
            },
          },
        },
      },
    },
    Http500: {
      type: 'object',
      properties: {
        error: {
          type: 'array',
          items: {
            properties: {
              status: {
                type: 'number',
                example: 500,
              },
              message: {
                type: 'string',
                example: 'External Weather API Unavailable',
              },
            },
          },
        },
      },
    },
  },
};
