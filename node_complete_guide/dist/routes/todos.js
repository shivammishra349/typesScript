"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let route = (0, express_1.Router)();
let todos = [];
route.get('/', (req, res, next) => {
    try {
        res.status(200).json({ todos: todos });
    }
    catch (_a) {
        res.status(500).json({ message: 'internal server error' });
    }
});
route.post('/todo', (req, res, next) => {
    try {
        let body = req.body;
        const newTodo = {
            id: new Date().toISOString(),
            text: body.text
        };
        todos.push(newTodo);
        res.status(200).json({ data: todos });
    }
    catch (_a) {
        res.status(500).json({ message: 'internal server error' });
    }
});
route.put('/todo/:todoId', (req, res, next) => {
    let params = req.params;
    const tid = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'updated successfully' });
    }
    res.status(404).json({ message: 'element not found' });
});
route.delete('/todo /:todoId', (req, res) => {
    try {
        let params = req.body;
        todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
        res.status(200).json({ message: 'deleted successfully' });
    }
    catch (_a) {
        res.status(500).json({ message: 'somthing went wrong' });
    }
});
exports.default = route;
