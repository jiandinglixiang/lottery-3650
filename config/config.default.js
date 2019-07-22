/* eslint valid-jsdoc: "off" */
/* 插件配置文件 */
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.ENCRYPTED_PASSWORD = '164834183';
  // rsa加密证书密码
  config.PRIVATE_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDt4M20qFzgIBNiTbvQXZJdksRF0q4tTyfCneERn0t9ju8hR78wB1Azh3SlQgXLcEGDZvicrLs+PvY4hnHt3uIjT3iwml5KuMA8HNIcickR1Z0ICeAJTL7T+vrYCWaGEWG+4+DRyUJZD0BDNiLUQ63pv/wxHnPDfY2WB3ODunWJSwIDAQAB';
  // 公钥
  config.PUBLIC_KEY = 'MIICxjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIkBvEglsu83sCAggAMBQGCCqGSIb3DQMHBAg/3YsqpwJ3IQSCAoDTay/MJiSIeUKj5gnbEWVve1rMdmftHhhhptoypKuKk6zvToq/I9M+H97nyuqojMaHzb7ZrCwD5PhJp2omKKh700UKMeK4bRtBTVQUfNUZ53ihIvB/uFkyABoL5Mt8dz3D7BJgemdQoeidTrVKXmekJptg5MEdIppjZCWQVKMfuLSeYMVWaG4W1xl6JAZy0z0glh8LhVL6OzG0+KnMpMyMsKjRqMDHcQ96amsmrWpSrzn+47LuCWSqPbTwXf2nWBhR2ZOhyVnDDzGsBTYPB7zrEwp3Aj9scjGZ7PCEj4F9etQvZ/RIE1nfU/HxNbEjtT+atGFld1EzPIGvEsf3aB4IBpZ0GVov/RAWOzepF5L4qy5PUy+tLONWM4/lZzCP8dIPVRism9YthPNCsXcjfefeqDuQSPRQCH0SUbxXGaRP34l3xfAUC/2+T7uuLX0ZsRjXksYM2d4PuSIiHwxAw7BW3k46+xT82521MjDKX6YCp2e0sRlXsg+1SKH6ZUPQGhAqOv2ofB0mOqDKRWxggvjBbnHUjzAr+A2EddemUqe32qUuk17sSncz0XfA9o52PK4HZBc/Rl1usxdFv7PkX5aX8T1cn0aD+gflMeeodH0KQ7EEgySWYVlbHbplZHWaHs8vOdSUn4c1P5SiD+fJrYxscCgcTidwX1univT9pCATFckOkOso10zrapcvJvm+y1gKyneNxp27SgKaQpwZ9k44CpIifWUvWbds/tdXlGzHn0gG+PxgIO56HPQeoRtfBgPIpKel4EK8EURbs14apcSGv+FPvMqQvNgE1+KvyQyiQO1e9BAvm5+nsXETKgRj+s7cPe8FhIJPSERqan1aDYWZ';
  // 私钥
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
