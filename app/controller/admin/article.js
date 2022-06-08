/*
 * @Author: KAAN
 * @Date: 2022-04-29 18:45:01
 * @LastEditors: KAAN
 * @LastEditTime: 2022-06-08 17:13:46
 * @Descripttion: 
 */

'use strict';

const Controller = require('egg').Controller;
const { Success, Fail } = require('../../lib/response_status');

class ArticleController extends Controller {
  /**
   *  获取文章列表
   */
  async getArticleList() {
    const { ctx } = this;
    const articleList = await ctx.service.admin.article.findArticles();
    if (!articleList) {
      ctx.body = Fail(500, 'article请求出错');
    } else {
      const articles = articleList.map(item => {
        // 格式化
        return Object.assign({}, {
          id: item.article_id,
          title: item.article_title,
          summary: item.article_summary,
          content_md: item.content_md,
          content_html: item.content_html,
          created_at: item.created_at,
          updated_at: item.updated_at,
        });
      });
      ctx.body = {
        ...Success(200, 'Success'),
        data: {
          articles,
        },
      };
    };
  };

  /**
   *  根据文章id获取标签
   *  @param {string} articleId 文章id
   */
  async getArticleTags() {
    const { ctx } = this;
    ctx.validate({
      articleId: { type: 'integer' },
    });
    const { articleId } = ctx.request.body;
    const refs = await ctx.service.admin.article.getTagRefs(articleId);
    const promiseTagList = refs.map(item => {
      const tagId = item.tag_id;
      const tag = ctx.service.admin.tag.findTagNameById(tagId);
      return tag;
    });
    const tagList = await Promise.all(promiseTagList);
    ctx.body = {
      ...Success(200, 'Success'),
      data: {
        tagList,
      },
    };
  };

  /**
   * 创建or更新文章
   * @param {Object} articleInfo 文章相关参数
   */
  async editArticle() {
    const { ctx } = this;
    ctx.validate({
      articleInfo: { type: 'object' },
    });
    const { articleInfo } = ctx.request.body;
    const { aid = null, title, summary, content_md, content_html } = articleInfo;
     
    let newArticleInfo = {};
    // 根据aid是否存在进行创建or更新
    if (aid) {
      const updateList = await ctx.service.admin.article.updateArticle(aid, title, summary, content_md, content_html);
      if (updateList) {
        newArticleInfo = await ctx.service.admin.article.findArticleById(aid);
      }
    } else {
      const newAid = parseInt(new Date().getTime()).toString().slice(0,10); // 生成文章id
      newArticleInfo = await ctx.service.admin.article.createArticle(newAid, title, summary, content_md, content_html);
    };
    // 格式化
    const res = Object.assign({}, {
      article_id: newArticleInfo.article_id,
      article_title: newArticleInfo.article_title,
      article_summary: newArticleInfo.article_summary,
      content_md: newArticleInfo.content_md,
      content_html: newArticleInfo.content_html,
      created_at: newArticleInfo.created_at,
      updated_at: newArticleInfo.updated_at,
    });
    ctx.body = {
      ...Success(200, 'POST editArticle Success'),
      data: {
        res,
      },
    };
  };
};

module.exports = ArticleController;
