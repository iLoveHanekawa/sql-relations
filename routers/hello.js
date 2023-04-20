"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloRouter = void 0;
const express_1 = require("express");
const hello_1 = require("../controllers/hello");
exports.helloRouter = (0, express_1.Router)();
exports.helloRouter.get('/', hello_1.getNames);
