'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545897907728_607';

  // add your config here
  config.middleware = [];

  exports.io = {
    init: {
      wsEngine: 'ws',
      path: '/geoc',
    }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [ 'connection' ],
        packetMiddleware: [ 'packet' ],
      },
      '/geoc': {
        connectionMiddleware: [ 'connection' ],
        packetMiddleware: [ 'packet' ],
      },
    },

  };

  return config;
};
