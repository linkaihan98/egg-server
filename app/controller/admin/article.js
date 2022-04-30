/*
 * @Author: KAAN
 * @Date: 2022-04-29 18:45:01
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-30 12:12:30
 * @Descripttion: 
 */

'use strict';

const Controller = require('egg').Controller;
const { Success, Fail } = require('../../lib/response_status');

class ArticleController extends Controller {
  /**
   *  获取文章详情
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
          create_at: item.create_at,
          update_at: item.update_at,
        })
      });
      ctx.body = {
        ...Success(200, 'Success'),
        data: {
          articles,
        },
      };
    };
    
    // 读取文章、文章内容、标签、分类
  };

  /**
   * 新建or编辑文章
   * @param {Object} articleInfo 文章相关参数
   */
  async editArticle() {
    const { ctx, app } = this;
    const articleInfo = ctx.request.body;
     
    // 根据id是否存在进行创建or编辑
    if (articleInfo.article_id) {

      // update

    } else {
      articleInfo.articleId = new Date().getTime(); // 生成文章id

      /**
       *  1. Article 
       *      create
       *  3. tag
       *      调用addTag
       *  4. article_tag_referenced
       *      id生成，将a_id和t_id关联
       *  5. category
       *      同上
       */

    };
  };

}

module.exports = ArticleController;
