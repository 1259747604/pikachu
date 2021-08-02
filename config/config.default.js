/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1627437817917_3256";

    // add your middleware config here
    config.middleware = ["auth"];

    config.auth = {
        // 鉴权白名单
        ignore: ["/user/login"]
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.cors = {
        origin: "*",
        allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
        credentials: true
    };

    config.security = {
        csrf: false
    };

    config.jwt = {
        secret: "pikapika"
    };

    return {
        ...config,
        ...userConfig
    };
};
