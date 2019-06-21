/* eslint valid-jsdoc: "off" */
/* 插件配置文件 */
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1559281920495_2357';

  // add your middleware config here
  config.middleware = [];

  config.logger = {
    outputJSON: true,
  };

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: 6379,
      password: '',
      db: '0',
    },
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/lottery',
      options: {
        poolSize: 20,
        reconnectTries: 10,
        reconnectInterval: 500,
      },
    },
  };

  // debug 为 true 时，用于本地调试
  config.debug = true;

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
