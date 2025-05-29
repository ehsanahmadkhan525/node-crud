import swaggerJSDoc from 'swagger-jsdoc';
import { version } from '../../package.json';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node CRUD API Documentation',
      version,
      description: 'Documentation for the Node CRUD API with TypeScript',
    },
    servers: [
      {
        url: 'http://localhost:3010',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
