'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.h5.index);
  require('./router/admin.js')(app);
  require('./router/api.js')(app);
};
