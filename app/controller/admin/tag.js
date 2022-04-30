/*
 * @Author: KAAN
 * @Date: 2022-04-29 16:16:26
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-29 18:44:00
 * @Descripttion: 
 */

'use strict';

const Controller = require('egg').Controller;
const { Success, Fail } = require('../../lib/response_status');

class TagController extends Controller {
  /**
   *  获取tags列表
   */
  async getTagList() {
    const { ctx } = this;
    const tagList = await ctx.service.admin.tag.findTags();
    if (!tagList) {
      ctx.body = Fail(500, 'tag请求出错');
    } else {
      ctx.body = {
        ...Success(200, 'Success'),
        data: {
          tagList
        },
      };
    };
  };

  /**
   *  新建标签
   */
  async addTag() {
    const { ctx } = this;
    ctx.validate({
      tagName: { type: 'string' },
    });
    const { tagName } = ctx.request.body;
    // 1.findOrCreate 2.根据文章id创建关联
  }

}

module.exports = TagController;
