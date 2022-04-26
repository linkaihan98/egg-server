/*
 * @Author: KAAN
 * @Date: 2022-04-21 16:53:42
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-26 18:41:47
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { INTEGER, TEXT, DATE } = app.Sequelize;
  const ArticleDetail = app.model.define('article_details', {
    article_detail_id: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
    },
    content_md: {
      type: TEXT,
      comment: 'MARKDOWN正文',
    },
    content_md: {
      type: TEXT,
      comment: 'HTML正文',
    },
    article_id: {
      type: INTEGER,
    },
    created_at: {
      type: DATE,
    },
    updated_at: {
      type: DATE,
    },
  });

  return ArticleDetail;
};
