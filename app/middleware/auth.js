// 用户鉴权中间件
module.exports = options => {
    return async function auth(ctx, next) {
        //判断接口路径是否在白名单
        let token = ctx.request.header.authorization; //拿到token
        if (token) {
            try {
                let decoded = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret); //解密token
                ctx.userName = decoded.userName;
                await next();
            } catch (error) {
                ctx.helper.err(null, "失效的token");
            }
        } else {
            ctx.helper.err(null, "没有token");
        }
    };
};
