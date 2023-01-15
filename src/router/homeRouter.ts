import {Router} from "express";
import homeController from "../controller/HomeController";
import {router} from "./router";
import multer from 'multer'

export const homeRouter = Router();
homeRouter.get('/create', homeController.showFormCreate);
homeRouter.post('/create' , homeController.create);
homeRouter.get('/edit/:id' , homeController.showFormEdit);
homeRouter.post('/edit/:id' , homeController.update );
homeRouter.get('/delete/:id' , homeController.showFormDelete);
homeRouter.get('/deleteHome/:id' , homeController.delete);
