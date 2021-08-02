"use strict";

const Service = require("egg").Service;

class UserService extends Service {
    //登录
    async login(userName, pwd) {
        // 登录的假验证
        if (userName !== "admin" || pwd !== "admin") {
            return null;
        }
        const token = this.app.jwt.sign({ userName }, this.app.config.jwt.secret, { expiresIn: "7d" });
        return token;
    }
}

module.exports = UserService;
