import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiCache from 'apicache';

import localConfig from './config/local.config';
import v1ApiRouter from './api/v1/routes/user.routes';
import {swaggerDocs} from './swagger/swagger.v1';

dotenv.config();

const AppConfig = localConfig.app;

const app = express();
const cache = apiCache.middleware;

app.use(cache("2 minutes"));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: AppConfig.clientHost
}));

// app.use(function (req, res, next) {  
//   res.header("Access-Control-Allow-Origin", "*");  
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');  
//   next();  
// }); 

app.use("/api/v1", v1ApiRouter);

app.use(errorHandler);
function errorHandler(err, req, res, next) {
    error(err);
    res.status(500)
}

function onInit(){
  swaggerDocs(app, AppConfig);
}

app.listen(AppConfig.port, onInit);

export default app