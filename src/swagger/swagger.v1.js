import swaggerUI from 'swagger-ui-express';
import swaggerJSdoc from 'swagger-jsdoc';
import path from 'path';

// Basic Meta Informations about our API
const swaggerSpec = (app, AppConfig) => swaggerJSdoc({
  definition: {
    openapi: "3.0.0",
    info: { 
      title: "Rest API Doc",
      version: "1.0.0" ,
      description: 'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'JSONPlaceholder',
        url: 'https://jsonplaceholder.typicode.com',
      }
    },
    servers: [
      {
        url: `http://localhost:${AppConfig.port}/api/v1`,
        description: 'Development server',
      },
      {
        url: `http://localhost:${AppConfig.port}/api/v1`,
        description: 'Stageing server',
      },
      {
        url: `http://localhost:${AppConfig.port}/api/v1`,
        description: 'Production server',
      }
    ]
  },
  apis: ['../api/v1/routes/*.routes.js'],
});

// Function to setup our docs
export const swaggerDocs = (app, AppConfig) => {
  // Route-Handler to visit our docs
  app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec(app,AppConfig)));
  // Make our docs in JSON format available
  app.get("/api/v1/docs.json", (req, res) => {
    res.json(swaggerSpec(app,AppConfig));
  });
};

