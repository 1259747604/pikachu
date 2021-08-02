"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
    // 登录
    async login() {
        const { ctx } = this;
        const userName = ctx.request.body.name;
        const pwd = ctx.request.body.password;

        ctx.logger.info("用户%s请求登录", userName);

        let res = await ctx.service.user.login(userName, pwd);

        if (res) {
            ctx.logger.info("用户token:%s", res);
            ctx.helper.success(res);
        } else {
            ctx.helper.err(res, "用户或密码错误");
        }
    }

    // 获取用户信息
    async get() {
        const { ctx } = this;
        ctx.helper.success(ctx.userName)
    }
}

module.exports = UserController;
