import { Document, Schema, Model, model, Types } from "mongoose"

interface IUser extends Document {
  _id: Types.ObjectId
  name: string
  email: string
  special_price: string[]
}

const UserSchema: Schema = new Schema({
  _id: { type: Types.ObjectId, required: true, default: Types.ObjectId }, // Definición de ObjectId
  name: { type: String, required: true },
  email: { type: String, required: true },
  special_price: { type: Array, required: true },
});

const User: Model<IUser> = model<IUser>("User", UserSchema)

export { User, IUser }