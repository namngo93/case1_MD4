import {model,Schema} from 'mongoose';
import {ICategory} from "./category";


export interface IHome{
    name ?: string;
    price ?: number;
    image ?: string;
    description ?: string;
    category ?: ICategory;
}
// Đại diện cho bảng
const HomeSchema = new Schema<IHome>({
    name : String,
    price : Number,
    image : String,
    description : String,
    category: {
        type: String,
        ref: 'Category'
    }

});

const Home = model<IHome>('Home', HomeSchema)
export {Home};