"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.homeRouter = (0, express_1.Router)();
exports.homeRouter.get('/create', HomeController_1.default.showFormCreate);
exports.homeRouter.post('/create', HomeController_1.default.create);
exports.homeRouter.get('/edit/:id', HomeController_1.default.showFormEdit);
exports.homeRouter.post('/edit/:id', HomeController_1.default.update);
exports.homeRouter.get('/delete/:id', HomeController_1.default.showFormDelete);
exports.homeRouter.get('/deleteHome/:id', HomeController_1.default.delete);
//# sourceMappingURL=homeRouter.js.map