import mongoose from "mongoose"
export const connectDB = async (url: string): Promise<void> => {
  console.log(url)
  try {
    await mongoose.connect(url)
    console.log("MongoDB is connected")
  } catch (error) {
    console.log(error)
  }
}
