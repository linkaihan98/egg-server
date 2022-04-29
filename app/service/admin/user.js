/*
 * @Author: KAAN
 * @Date: 2022-04-27 02:17:55
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-27 02:24:10
 * @Descripttion: 
 */

'use strict';

const Service = require('egg').Service;

class User extends Service {
  async findUser(data) {
    const { username } = data;
    const user = await this.ctx.model.User.findOne({
      where: { username },
    });
    return user;
  }
}

module.exports = User;
