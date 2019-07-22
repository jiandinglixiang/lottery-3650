'use strict';
module.exports = app => {
  const { router, controller } = app;
  const apiV1 = router.namespace('/api/v1');
  apiV1.get('/', controller.api.home.index);
};
