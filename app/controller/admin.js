'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.redirect('http://www.baidu.com');
  }

  async index2() {
    const { ctx } = this;
    // renderClient 前端渲染，Node层只做 layout.html和资源依赖组装，渲染交给前端渲染。与服务端渲染的差别你可以通过查看运行后页面源代码即可明白两者之间的差异
    ctx.redirect('http://www.baidu.com');
  }
}

module.exports = HomeController;
