/*
 * @Author: KAAN
 * @Date: 2022-04-29 16:20:12
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-29 17:55:39
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
        count: item.tag_count
      })
    });
    return tags;
  }
}

module.exports = Tag;
