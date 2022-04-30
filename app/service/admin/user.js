/*
 * @Author: KAAN
 * @Date: 2022-04-27 02:17:55
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-29 17:53:58
 * @Descripttion: 
 */

'use strict';

const Service = require('egg').Service;

class User extends Service {
  /**
   * 获取用户信息
   * @param {string} username 用户名
   */
  async findUser(username) {
    const user = await this.ctx.model.User.findOne({
      where: { username },
    });
    return user;
  }
}

module.exports = User;
