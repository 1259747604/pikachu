module.exports = app => {
    const { router, controller } = app;
    // test 拉取代码
    router.post("/code/test", controller.code.test);

};
