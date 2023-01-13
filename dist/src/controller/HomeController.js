"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homeService_1 = __importDefault(require("../service/homeService"));
class HomeController {
    constructor() {
        this.showHome = async (req, res) => {
            let homes = await homeService_1.default.getAll();
            res.render('home', { home: homes });
        };
        this.showFormCreate = async (req, res) => {
            res.render('homes/create');
        };
        this.create = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let home = req.body;
                    home.image = '/storage/' + image.name;
                    await homeService_1.default.save(home);
                    res.redirect(301, '/home');
                }
            }
        };
        this.homeService = homeService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map