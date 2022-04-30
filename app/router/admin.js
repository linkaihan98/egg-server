/*
 * @Author: KAAN
 * @Date: 2022-04-27 02:13:36
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-30 01:40:33
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/api/admin/index', controller.admin.user.index); // 测试
  router.post('/api/admin/login', controller.admin.user.login); // 登录
  
  router.get('/api/admin/tags', controller.admin.tag.getTagList); // 标签列表

  router.get('/api/admin/articles', controller.admin.article.getArticleList); // 文章列表

};
