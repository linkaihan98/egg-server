/*
 * @Author: KAAN
 * @Date: 2022-04-27 02:13:36
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-27 02:18:40
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/api/admin/index', controller.admin.user.index); // 测试
  router.post('/api/admin/login', controller.admin.user.login); // 登录
  
};
