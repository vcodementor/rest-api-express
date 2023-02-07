const dotenv = require("dotenv");
dotenv.config();

const config = require('./config/config')
AppConfig = config.app;

const express = require("express");
const apiCache = require("apicache");
const cors = require("cors");

const adminRouter = require("./routes/api.v1");
const webRouter = require("./routes/api.v1");
const v1ApiRouter = require("./routes/api.v1");
const { swaggerDocs: V1SwaggerDocs } = require("./swagger/swagger.v1");

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

app.use("/admin", adminRouter);
app.use("/", webRouter);
app.use("/api/v1", v1ApiRouter);


app.use(errorHandler);
function errorHandler(err, req, res, next) {
    error(err);
    res.status(500)
}

function onInit(){
  // V1SwaggerDocs(app, AppConfig.port);
}

app.listen(AppConfig.port, onInit);

module.exports = app;