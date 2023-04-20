"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hello_1 = require("./routers/hello");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>');
});
app.use('/api/v1', hello_1.helloRouter);
const port = Number(process.env.PORT) || 3000;
const start = (port) => {
    app.listen(port, () => {
        console.log(`server listening at: http://localhost:${port}`);
    });
};
start(port);
