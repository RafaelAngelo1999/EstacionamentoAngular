const proxy = [
  {
    context: '/api',
    target: 'http://127.0.0.1:8000',
    secure: false,
    logLevel: 'debug',
    pathRewrite :{'^/api' : ''}
  }
];
module.exports = proxy;