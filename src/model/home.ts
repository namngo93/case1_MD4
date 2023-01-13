import {model,Schema} from 'mongoose';


export interface IHome{
    name ?: string;
    price ?: number;
    image ?: string
}
// Đại diện cho bảng
const HomeSchema = new Schema<IHome>({
    name : String,
    price : Number,
    image : String,

});

const Home = model<IHome>('Home', HomeSchema)
export {Home};