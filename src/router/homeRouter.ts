import {Router} from "express";
import homeController from "../controller/HomeController";
import {router} from "./router";
import multer from 'multer'

export const homeRouter = Router();
homeRouter.get('/create', homeController.showFormCreate);
homeRouter.post('/create' , homeController.create);
// productRouter.get('/edit/:id' , homeController.showFormEdit);
// productRouter.post('/edit/:id' , homeController.update );