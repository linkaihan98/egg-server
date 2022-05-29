/*
 * @Author: KAAN
 * @Date: 2022-04-29 16:20:12
 * @LastEditors: KAAN
 * @LastEditTime: 2022-05-29 14:34:03
 * @Descripttion: 
 */

'use strict';

const Service = require('egg').Service;

class Tag extends Service {
  /**
   * 获取标签列表
   */
  async findTags() {
    const tagList = await this.ctx.model.Tag.findAll({
      where: { status: 1 },
    });
    const tags = tagList.map(item => {
      // 格式化
      return Object.assign({}, {
        id: item.tag_id,
        name: item.tag_name,
      })
    });
    return tags;
  }

  /**
   * 根据tag_name获取标签
   *  @param {string} tagName 标签名
   */
   async findTagByName(tagName) {
    const tag = await this.ctx.model.Tag.findOne({
      where: { tag_name: tagName },
    });
    return tag;
  }

  /**
   *  查找或新建标签
   *  @param {string} tagName 标签名
   */
   async findOrCreateTag(tagName) {
    const tag = await this.ctx.model.Tag.findOrCreate({
      where: {
        tag_name: tagName,
        status: 1,
      },
    });
    return tag;
  }

  /**
   *  删除标签
   *  @param {string} tagId 标签id
   */
  async  deleteTag(tagId) {
    const tag = await this.ctx.model.Tag.update({
      status: 2,
    }, {
      where: {
        tag_id: tagId,
      },
    });
    return tag;
  }

  /**
   *  恢复删除的标签
   *  @param {string} tagName 标签名
   */
   async  resetTag(tagName) {
    const tag = await this.ctx.model.Tag.update({
      status: 1,
    }, {
      where: {
        tag_name: tagName,
      },
    });
    return tag;
  }

  /**
   *  创建标签与文章的关联
   *  @param {string} tagId 标签id
   *  @param {string} articleId 文章id
   */
   async createReference(tagId, articleId) {
     const atr = await this.ctx.model.ArticleTagReferenced.create({
      article_id: articleId,
      tag_id: tagId,
    });
    return atr;
  }

  /**
   *  删除标签与文章的关联
   *  @param {string} tagId 标签id
   *  @param {string} articleId 文章id
   */
  async deleteReference(tagId, articleId) {
    const result = await this.ctx.model.ArticleTagReferenced.destroy({
      where: {
        article_id: articleId,
        tag_id: tagId,
      }
   });
   return result > 0;
 }

}

module.exports = Tag;
