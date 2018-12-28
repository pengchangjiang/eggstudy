'use strict';
module.exports = app => {
  return async (ctx, next) => {
    console.log('packet:', ctx.packet);
    ctx.socket.emit('res', 'packet say hello');
    await next();
  };
};
