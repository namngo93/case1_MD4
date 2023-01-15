"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homeService_1 = __importDefault(require("../service/homeService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
class HomeController {
    constructor() {
        this.showHome = async (req, res) => {
            let homes = await homeService_1.default.getAll();
            res.render('home', { homes: homes });
        };
        this.search = async (req, res) => {
            let homes = await this.homeService.findByName(req.body);
            res.render('home', { homes: homes });
        };
        this.showFormCreate = async (req, res) => {
            let categories = await categoryService_1.default.getAll();
            res.render('homes/create', { categories: categories });
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
        this.showFormEdit = async (req, res) => {
            let id = req.params.id;
            let homes = await this.homeService.findByID(id);
            res.render('homes/edit', { home: homes });
        };
        this.update = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let id = req.params.id;
                    let home = req.body;
                    home.image = '/storage/' + image.name;
                    await this.homeService.update(id, home);
                    res.redirect(301, '/home');
                }
            }
        };
        this.showFormDelete = async (req, res) => {
            let idDelete = req.params.id;
            res.render('homes/delete', { idDelete: idDelete });
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await this.homeService.delete(id);
            res.redirect(301, '/home');
        };
        this.homeService = homeService_1.default;
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map