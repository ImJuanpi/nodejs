const path = require('path');

module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Product API',
        version: '1.0.0',
        description: 'Microservice Product API',
    },
    servers: [
        { url: 'http://localhost:3001' }
    ],
    apis: [path.join(__dirname, './src/**/**/*.ts')]
};
