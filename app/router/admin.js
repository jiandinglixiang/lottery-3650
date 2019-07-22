'use strict';
module.exports = app => {
  const { controller, router } = app;
  const admin = router.namespace('/admin');
  admin.get('/', controller.admin.index);
  admin.get('/2', controller.admin.index2);
};
