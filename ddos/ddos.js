"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
while (true) {
    var url = "Foo";
    try {
        axios_1["default"].get(url).then(function (result) {
            console.log("Spamming");
        });
    }
    catch (e) { }
}
