import mongoose from "mongoose"
export const connectDB = async (url: string): Promise<void> => {
  try {
    await mongoose.connect(url)
    console.log("MongoDB is connected")
  } catch (error) {
    console.log("MongoDB connection unsuccessful");
    console.log(error)
  }
}
