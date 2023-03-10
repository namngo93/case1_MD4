"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
const homeRouter_1 = require("./homeRouter");
const userRouter_1 = require("./userRouter");
exports.router = (0, express_1.Router)();
exports.router.get('/home', HomeController_1.default.showHome);
exports.router.get('/homeUser', HomeController_1.default.showHomeUser);
exports.router.post('/home', HomeController_1.default.search);
exports.router.post('/homeUser', HomeController_1.default.searchUser);
exports.router.use('/homes', homeRouter_1.homeRouter);
exports.router.use('/users', userRouter_1.userRouter);
//# sourceMappingURL=router.js.map