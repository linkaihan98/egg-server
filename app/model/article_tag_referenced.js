/*
 * @Author: KAAN
 * @Date: 2022-04-21 16:52:18
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-26 18:49:49
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  const ArticleTag = app.model.define('article_tag_referenced', {
    atr_id: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
    },
    article_id: {
      type: INTEGER,
      defaultValue: null,
    },
    tag_id: {
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

  return ArticleTag;
};
