const config = {
    db: {
        mysql :{
            host: process.env.DB_HOST || 'host',
            name: process.env.DB_NAME || 'dbName',
            user: process.env.DB_USER || 'username',
            password: process.env.DB_PASS || '1234',
            port: process.env.DB_PORT || '3306',
            dialect: process.env.DB_DIALECT || 'mysql'
        },
        mongodb : {
            url:  process.env.MONGODB_URI || "mongodb://localhost:27017/db_name"
        }
    },
    app: {
        port: process.env.port || '3000',
        clientHost: process.env.CLIENT_HOST || 'http://localhost:3001',
    },
};

export default config;