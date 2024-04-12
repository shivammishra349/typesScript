"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
let bodyParser = require('body-parser');
const todos_1 = __importDefault(require("./routes/todos"));
let app = express();
app.use(bodyParser.json());
app.use(todos_1.default);
app.listen(3000);
