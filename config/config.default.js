/* eslint valid-jsdoc: "off" */

'use strict';

const { DATABASE, HOST, PORT, USERNAME, PASSWORD } = require('./secret.js');

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
  config.keys = appInfo.name + '_1650527121030_3797';

  // add your middleware config here
  config.middleware = [];

  // 编写 sequelize 配置
  config.sequelize = {
    dialect: 'mysql',
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
  };
  // 跨越配置
  config.security = {
    csrf: {
      enable: false,
      // ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    credentials: true,
    // AccessControlAllowCredentials: true,
    // AccessControlAllowOrigin: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    origin: [ 'http://localhost:3000' ],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
