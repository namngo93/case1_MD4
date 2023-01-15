"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = require("../model/home");
class HomeService {
    constructor() {
        this.getAll = async () => {
            let homes = await home_1.Home.find().populate('category');
            return homes;
        };
        this.save = async (home) => {
            return home_1.Home.create(home);
        };
        this.update = async (id, newHome) => {
            let product = home_1.Home.findOne({ _id: id });
            if (!product) {
                return null;
            }
            newHome._id = id;
            return home_1.Home.updateOne({ _id: id }, newHome);
        };
        this.findByID = async (id) => {
            let home = home_1.Home.findOne({ _id: id });
            if (!home) {
                return null;
            }
            else {
                return home;
            }
        };
        this.delete = async (id) => {
            let home = home_1.Home.findOne({ _id: id });
            if (!home) {
                return null;
            }
            else {
                return home.deleteOne({ _id: id });
            }
        };
        this.findByName = async (search) => {
            let homes = await home_1.Home.find({ name: { $regex: `(.*)${search.search}(.*)` } });
            if (!homes) {
                return null;
            }
            return homes;
        };
    }
}
exports.default = new HomeService();
//# sourceMappingURL=homeService.js.map