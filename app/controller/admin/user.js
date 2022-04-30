/*
 * @Author: KAAN
 * @Date: 2022-04-27 02:11:05
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-29 17:53:59
 * @Descripttion: 
 */

'use strict';

const jwt = require('jsonwebtoken');
const { Success, Fail } = require('../../lib/response_status');
const { generatePassword } = require('../../lib/crypto');
const { SECRET, EXPIRES } = require('../../../config/secret');
const Controller = require('egg').Controller;

class UserController extends Controller {

  /**
   * test api
   */
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  /**
   * 登录
   */
  async login() {
    const { ctx } = this;
    ctx.validate({
      username: { type: 'string' },
      password: { type: 'string' },
    });
    const { username, password } = ctx.request.body;
    const user = await ctx.service.admin.user.findUser(username);
    if (!user) {
      ctx.body = Fail(500, '用户不存在');
    } else if (generatePassword(password) !== user.password) {
      ctx.body = Fail(500, '密码错误，请重新输入');
    } else {
      const token = jwt.sign(
        { uid: user.id, username },
        SECRET,
        { expiresIn: EXPIRES }
      );
      ctx.cookies.set('_token', token, {
        encrypt: true, // 加密传输
        maxAge: EXPIRES * 1000,
      });
      ctx.body = {
        ...Success(200, 'Success'),
        data: {
          token,
          username,
        }
      };
    }
  }
}

module.exports = UserController;
