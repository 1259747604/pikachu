module.exports = app => {
    const { router, controller } = app;
    // 登录
    router.post("/user/login", controller.user.login);

    // 获取用户信息
    router.get("/user/get", controller.user.get);
};
