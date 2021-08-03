"use strict";

const Controller = require("egg").Controller;
const git = require("simple-git/promise");

class CodeController extends Controller {
    //测试拉代码
    async test() {
        const { ctx } = this;
        let { url, path } = ctx.request.body;
        const commands = ['clone',url];
        git(path)
            .raw(commands)
            .then(data => {
                console.log("🚀 ~ file: code.js ~ line 15 ~ CodeController ~ test ~ data", data)
            })
            .catch(error => {
                console.log("🚀 ~ file: code.js ~ line 18 ~ CodeController ~ test ~ error", error)
            });
    }
}

module.exports = CodeController;
