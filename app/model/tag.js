/*
 * @Author: KAAN
 * @Date: 2022-04-21 16:52:18
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-26 18:42:04
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Tag = app.model.define('tags', {
    tag_id: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
    },
    tag_name: {
      type: STRING(50),
      defaultValue: null,
    },
    status: {
      type: INTEGER,
      defaultValue: 1,
      comment: '1->正常,2->删除',
    },
    created_at: {
      type: DATE,
    },
    updated_at: {
      type: DATE,
    },
  });

  return Tag;
};
