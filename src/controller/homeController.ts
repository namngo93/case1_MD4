import {Request, Response} from "express";
import homeService from "../service/homeService";
import categoryService from "../service/categoryService";

class HomeController {
    private homeService;
    private categoryService;

    constructor() {
        this.homeService = homeService;
        this.categoryService= categoryService;
    }

    showHome = async (req: Request, res: Response) => {
        let homes = await homeService.getAll();
        res.render('home', {homes: homes})
    }

    search =  async (req: Request, res: Response) => {
        let homes = await this.homeService.findByName(req.body);
        res.render('home', {homes: homes})
    }

    showFormCreate = async (req: Request, res: Response) => {
        let categories = await categoryService.getAll()
        res.render('homes/create', {categories: categories});
    }

    create = async (req: Request, res: Response) => {
        if (req.files) {
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name)
                let home = req.body;
                home.image = '/storage/' + image.name;
                await homeService.save(home);
                res.redirect(301, '/home');
            }
        }
    }
    showFormEdit = async (req: Request, res: Response) => {
        let id = req.params.id;
        let homes = await this.homeService.findByID(id);
        res.render('homes/edit', {home: homes});
    }

    update = async (req: Request, res: Response) => {
        if (req.files) {
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name)
                let id = req.params.id;
                let home = req.body;
                home.image = '/storage/' + image.name;
                await this.homeService.update(id, home);
                res.redirect(301, '/home');
            }
        }
    }

    showFormDelete = async (req: Request, res: Response) => {
        let idDelete = req.params.id;
        res.render('homes/delete', {idDelete: idDelete});
    }

    delete = async (req: Request, res: Response) => {
       let id = req.params.id;
       await this.homeService.delete(id);
       res.redirect(301, '/home');
            }

 }

export default new HomeController();