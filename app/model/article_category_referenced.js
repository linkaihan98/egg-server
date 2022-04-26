/*
 * @Author: KAAN
 * @Date: 2022-04-21 16:53:18
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-26 18:51:34
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  const ArticleCategory = app.model.define('article_category_referenced', {
    acr_id: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
    },
    article_id: {
      type: INTEGER,
      defaultValue: null,
    },
    category_id: {
      type: INTEGER,
      defaultValue: null,
    },
    created_at: {
      type: DATE,
    },
    updated_at: {
      type: DATE,
    },
  });

  return ArticleCategory;
};
