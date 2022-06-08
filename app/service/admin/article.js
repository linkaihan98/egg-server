/*
 * @Author: KAAN
 * @Date: 2022-04-29 18:45:10
 * @LastEditors: KAAN
 * @LastEditTime: 2022-06-08 16:05:33
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
  };

  /**
   *  根据文章id获取该文章
   *  @param {string} articleId 文章id
   */
  async findArticleById(aid) {
    const article = await this.ctx.model.Article.findByPk(aid);
    return article;
  };

  /**
   *  根据文章id获取该文章所有标签的id
   *  @param {string} articleId 文章id
   */
  async getTagRefs(articleId) {
    const refs = await this.ctx.model.ArticleTagReferenced.findAll({
      where: {
        article_id: articleId,
      }
   });
    return refs;
  };

  /**
   *  创建新文章
   *  @param {string} aid 文章id
   *  @param {string} title 文章标题
   *  @param {string} summary 文章简介
   *  @param {string} content_md 正文markdown
   *  @param {string} content_html 正文html
   * 
   */
   async createArticle(newAid, title, summary, content_md, content_html) {
    const newArticle = await this.ctx.model.Article.create({
      article_id: newAid,
      article_title: title,
      article_summary: summary,
      content_md,
      content_html,
    });
    return newArticle;
  };

  /**
   *  更新文章内容
   *  @param {string} aid 文章id
   *  @param {string} title 文章标题
   *  @param {string} summary 文章简介
   *  @param {string} content_md 正文markdown
   *  @param {string} content_html 正文html
   * 
   */
  async updateArticle(aid, title, summary, content_md, content_html) {
    const newArticle = await this.ctx.model.Article.update({
      article_title: title,
      article_summary: summary,
      content_md,
      content_html,
    }, {
      where: {
        article_id: aid,
      }
   });
    return newArticle;
  };

}

module.exports = Article;
