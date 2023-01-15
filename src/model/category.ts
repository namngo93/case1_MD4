import {model,Schema} from 'mongoose';


export interface ICategory{
    name ?: string;
}
// Đại diện cho bảng
const CategorySchema = new Schema<ICategory>({
    name : String,

});

const Category = model<ICategory>('Category', CategorySchema)
export {Category};