/*
 * @Author: KAAN
 * @Date: 2022-04-29 18:45:10
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-30 12:02:16
 * @Descripttion: 
 */

'use strict';

const Service = require('egg').Service;

class Article extends Service {
  /**
   * 获取文章列表
   */
  async findArticles() {
    const articleList = await this.ctx.model.Article.findAll({
      where: { status: 1 },
    });
    return articleList;
  }
}

module.exports = Article;
