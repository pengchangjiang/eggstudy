'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  // console.log(io);
  io.of('/').route('res', io.controller.default.ping);
  io.of('/geoc').route('res', io.controller.default.geoc);
};
