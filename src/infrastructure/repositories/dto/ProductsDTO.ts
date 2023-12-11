import { Document, Schema, Model, model } from 'mongoose';

interface IProduct extends Document {
  _id: string;
  name: string;
  price: number;
  brand: string;
  stock:number;
  special_price: number;
}

const ProductSchema: Schema = new Schema({
  _id : { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand:{ type: String, required: true },
  stock:{ type: Number, required: true },
  special_price: { type: Number, required: true },
});

const Product: Model<IProduct> = model<IProduct>('Product', ProductSchema);

export { Product, IProduct };