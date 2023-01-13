"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const mongoose_1 = require("mongoose");
const HomeSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    image: String,
});
const Home = (0, mongoose_1.model)('Home', HomeSchema);
exports.Home = Home;
//# sourceMappingURL=home.js.map