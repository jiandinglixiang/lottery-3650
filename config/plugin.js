'use strict';
/* 插件启用关闭文件 */
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
};
