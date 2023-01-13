import {Router} from "express";
import homeController from "../controller/HomeController";
import {homeRouter} from "./homeRouter";

export const router = Router();
router.get('/home', homeController.showHome)
router.use('/homes', homeRouter);


