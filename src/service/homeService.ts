import {Home} from "../model/home";

class HomeService {
    constructor() {
    }

    getAll = async () => {
        let homes = await Home.find();
        return homes;
    }

    save = async (home) => {      // product này vẫn chưa có id
        return Home.create(home); //khởi tạo đã có id
    }

   private update = async (id,newHome) => {
        let product = Home.findOne({_id: id});
        if (!product) {
            return null;
        }
        newHome._id = id;
        return Home.updateOne({_id: id}, newHome);
    }
    // Tìm bằng ID
    private findByID = async (id) => {
        let home = Home.findOne({_id: id});  //findOne là tìm ra một thằng
        if (!home){
            return null;
        }else {
            return home;
        }
    }
}

export default new HomeService();