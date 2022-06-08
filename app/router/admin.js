/*
 * @Author: KAAN
 * @Date: 2022-04-27 02:13:36
 * @LastEditors: KAAN
 * @LastEditTime: 2022-06-08 14:40:31
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/api/admin/index', controller.admin.user.index); // 测试
  router.post('/api/admin/login', controller.admin.user.login); // 登录
  
  router.get('/api/admin/tags', controller.admin.tag.getTagList); // 标签列表
  router.post('/api/admin/addTag', controller.admin.tag.addTag); // 创建标签
  router.post('/api/admin/delTag', controller.admin.tag.delTag); // 删除标签
  router.post('/api/admin/setTagReference', controller.admin.tag.setTagReference); // 创建标签与文章的关联
  router.post('/api/admin/delTagReference', controller.admin.tag.delTagReference); // 删除标签与文章的关联

  router.get('/api/admin/articles', controller.admin.article.getArticleList); // 获取文章列表
  router.post('/api/admin/getArticleTags', controller.admin.article.getArticleTags); // 获取文章标签
  router.post('/api/admin/editArticle', controller.admin.article.editArticle); // 编辑文章

};
