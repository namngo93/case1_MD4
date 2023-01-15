import {Router} from "express";
import homeController from "../controller/HomeController";
import {homeRouter} from "./homeRouter";
import {userRouter} from "./userRouter";

export const router = Router();
router.get('/home', homeController.showHome)
router.post('/home', homeController.search)
router.use('/homes', homeRouter);
router.use('/users', userRouter);


