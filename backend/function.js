const { app } = require('./app');
const serverless = require('serverless-http');

module.exports.handler = serverless(app, {
    request(request, event, context) {
        // Yandex serverless gateway вместо оригинального пути в событии прописывает параметр из конфигурации
        // приходится подправлять путь, чтобы это всё работало
        const url = event.url ?? '';
        request.url = url;
        request.originalUrl = url;
        request.path = url.split('?')[0];
    },
});
