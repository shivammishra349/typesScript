"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var route = (0, express_1.Router)();
var todos = [];
route.get('/', function (req, res, next) {
    res.status(200).json({ todos: todos });
});
route.post('/todo', function (req, res, next) {
    var newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
});
exports.default = route;
