"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url;
while (true) {
    try {
        axios_1["default"].get(url).then(function (result) {
            console.log("Spamming");
        });
    }
    catch (e) {
    }
}
