"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const routes_js_1 = __importDefault(require("./routes/routes.js"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/', routes_js_1.default);
app.listen(8000, () => {
    console.log('..................');
});
