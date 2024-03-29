/*
 * @Author: KAAN
 * @Date: 2022-04-21 16:52:12
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-30 11:56:25
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;
  const Article = app.model.define('articles', {
    article_id: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
    },
    article_title: {
      type: STRING(200),
      defaultValue: null,
      comment: '文章标题',
    },
    article_summary: {
      type: STRING(500),
      defaultValue: null,
      comment: '文章摘要',
    },
    content_md: {
      type: TEXT,
      comment: 'MARKDOWN正文',
    },
    content_html: {
      type: TEXT,
      comment: 'HTML正文',
    },
    cover: {
      type: STRING,
      defaultValue: null,
      comment: '封面图片',
    },
    status: {
      type: INTEGER,
      defaultValue: 1,
      comment: '1->正常,2->删除',
    },
    publish_status: {
      type: INTEGER,
      defaultValue: 1,
      comment: '1->未发布,2->已发布',
    },
    created_at: {
      type: DATE,
    },
    updated_at: {
      type: DATE,
    },
  });

  return Article;
};
