/*
 * @Author: KAAN
 * @Date: 2022-04-29 16:16:26
 * @LastEditors: KAAN
 * @LastEditTime: 2022-05-29 14:56:07
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
        ...Success(200, 'GET tagList success'),
        data: {
          tagList
        },
      };
    };
  };

  /**
   *  新建标签
   *  @param {string} tagName 标签名
   */
  async addTag() {
    const { ctx } = this;
    ctx.validate({
      tagName: { type: 'string' },
    });
    const { tagName } = ctx.request.body;
    const tag = await ctx.service.admin.tag.findOrCreateTag(tagName);
    // tag<Array>包含一个实例(找到的实例或创建的实例)和一个布尔值,指示该实例是已创建还是已经存在.
    if (!tag) {
      ctx.body = Fail(500, '新建tag请求出错');
    } else {
      // 格式化
      const newTag = Object.assign({}, {
        tag_name: tag[0].tag_name,
        tag_id: tag[0].tag_id,
      })
      ctx.body = {
        ...Success(200, 'POST addTag success'),
        data: {
          ...newTag
        }
      };
    }
  }

  /**
   *  删除标签
   *  @param {string} tagId 标签id
   */
  async delTag() {
    const { ctx } = this;
    ctx.validate({
      tagId: { type: 'integer' },
    });
    const { tagId } = ctx.request.body;
    await ctx.service.admin.tag.deleteTag(tagId);
    ctx.body = {
      ...Success(200, 'POST delTag success'),
      data: {
        tagId
      }
    };
  }

  /**
   *  添加标签与文章的关联
   *  @param {string} tagId 标签id
   *  @param {string} articleId 文章id
   */
  async setTagReference() {
    const { ctx } = this;
    ctx.validate({
      tagId: { type: 'integer' },
      articleId: { type: 'integer' },
    });
    const { tagId, articleId } = ctx.request.body;
    const atr = await ctx.service.admin.tag.createReference(tagId, articleId);
    if (!atr) {
      ctx.body = Fail(500, 'tag关联article请求出错');
    } else {
      ctx.body = {
        ...Success(200, 'POST tag setReference success'),
        data: {
          atr
        }
      };
    }
  }

  /**
   *  删除标签与文章的关联
   *  @param {string} tagId 标签id
   *  @param {string} articleId 文章id
   */
   async delTagReference() {
    const { ctx } = this;
    ctx.validate({
      tagId: { type: 'integer' },
      articleId: { type: 'integer' },
    });
    const { tagId, articleId } = ctx.request.body;
    const isDel = await ctx.service.admin.tag.deleteReference(tagId, articleId);
    if (!isDel) {
      ctx.body = Fail(500, '删除tag关联article请求出错');
    } else {
      ctx.body = {
        ...Success(200, 'POST tag delReference success'),
        data: {
          isDel
        }
      };
    }
  }

}

module.exports = TagController;
