"use strict";

var path = require("path");

var selenium_server = {

    getServerPath: function () {
        return path.resolve(__dirname + "/selenium-server-standalone-2.46.0.jar")
    },

    getChromeDriverPath: function () {

        var chromeDriverPath = '';

        if (process.platform === 'linux' && process.arch === 'x64') {
            chromeDriverPath = path.resolve(__dirname + "/drivers/linux64");
        } else if (process.platform === 'linux') {
            chromeDriverPath = path.resolve(__dirname + "/drivers/linux32/");
        } else if (process.platform === 'darwin') {
            chromeDriverPath = path.resolve(__dirname + "/drivers/mac32/");
        } else if (process.platform === 'win32') {
            console.log('Windows platform is not supported yet');
        } else {
            console.log('Unexpected platform or architecture:', process.platform, process.arch);
            process.exit(1);
        }

        return chromeDriverPath
    }
};

module.exports = selenium_server; //export