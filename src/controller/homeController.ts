import {Request, Response} from "express";
import productService from "../service/homeService";
import homeService from "../service/homeService";

class HomeController {
    private homeService;

    constructor() {
        this.homeService = homeService;
    }

    showHome = async (req: Request, res: Response) => {
        let homes = await homeService.getAll();
        res.render('home', {home: homes})
    }

    showFormCreate = async (req: Request, res: Response) => {
        res.render('homes/create');
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
//     showFormEdit = async (req: Request, res: Response) => {
//         let id = req.params.id;
//         let homes = await this.homeService.findByID(id);
//         res.render('homes/edit', {home: homes});
//     }
//
//     update = async (req: Request, res: Response) => {
//         if (req.files) {
//             let image = req.files.image;
//             if ("mv" in image) {
//                 await image.mv('./public/storage/' + image.name)
//                 let id = req.params.id;
//                 let home = req.body;
//                 home.image = '/storage/' + image.name;
//                 await this.homeService.update(id, home);
//                 res.redirect(301, '/home');
//             }
//         }
//     }
//
 }

export default new HomeController();