'use strict';

const Controller = require('egg').Controller;

class H5Controller extends Controller {
  async index() {
    const { ctx } = this;
    return ctx.redirect('/public/h5/index.html');
  }
}

module.exports = H5Controller;
