'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async ping() {
    const { ctx, app } = this;
    const message = ctx.args[0];
    ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
  }
  async geoc() {
    const { ctx, app } = this;
    const message = ctx.args[0];
    ctx.socket.emit('res', `geoc got: ${message}`);
  }
}

module.exports = DefaultController;
