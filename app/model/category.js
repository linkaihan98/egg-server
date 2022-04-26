/*
 * @Author: KAAN
 * @Date: 2022-04-21 16:52:26
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-26 18:46:39
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Category = app.model.define('categories', {
    category_id: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
    },
    category_name: {
      type: STRING(50),
      defaultValue: null,
    },
    parent_id: {
      type: INTEGER,
      defaultValue: null,
      comment: '父分类id',
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

  Category.associate = () => {
    app.model.Category.hasMany(app.model.Article, { foreignKey: 'category_id' });
  };

  return Category;
};
