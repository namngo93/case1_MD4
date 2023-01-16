import {Router} from "express";
import homeController from "../controller/HomeController";
import {homeRouter} from "./homeRouter";
import {userRouter} from "./userRouter";

export const router = Router();
router.get('/home', homeController.showHome)
router.get('/homeUser', homeController.showHomeUser)
// router.get('/thue/:idHome/:username', homeController.showMyHome)
router.post('/home', homeController.search)
router.post('/homeUser', homeController.searchUser)
router.use('/homes', homeRouter);
router.use('/users', userRouter);


