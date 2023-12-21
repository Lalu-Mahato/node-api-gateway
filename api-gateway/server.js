const http = require('http');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

const proxyOptions = {
  '/user': {
    target: 'http://localhost:3001', 
    changeOrigin: true,
  },
  '/product': {
    target: 'http://localhost:3002', 
    changeOrigin: true,
    },
  '/report': {
    target: 'http://localhost:3003', 
    changeOrigin: true,
  }
};


for (const [route, options] of Object.entries(proxyOptions)) {
  app.use(route, createProxyMiddleware(options));
}

const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening on port:${port}`));
