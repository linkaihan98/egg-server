/*
 * @Author: KAAN
 * @Date: 2022-04-21 16:50:25
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-26 18:29:49
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const User = app.model.define('users', {
    uid: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
    },
    username: {
      type: STRING(50),
      allowNull: false,
    },
    password: {
      type: STRING(200),
      allowNull: false,
    },
    created_at: {
      type: DATE,
    },
    updated_at: {
      type: DATE,
    },
  });
  
  return User;
};
