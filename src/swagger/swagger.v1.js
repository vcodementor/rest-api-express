import swaggerUI from 'swagger-ui-express'
import swaggerJSdoc from 'swagger-jsdoc'

// Basic Meta Informations about our API
const swaggerSpec = (app, AppConfig) => swaggerJSdoc({
  definition: {
    openapi: "3.0.0",
    info: { 
      title: "Rest API EXPRESS",
      version: "1.0.0" 
    },
    servers: [
      {
          url: `http://localhost:${AppConfig.port}`,
      }
    ]
  },
  apis: ['../api/v1/routes/user.routes.js'],
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

