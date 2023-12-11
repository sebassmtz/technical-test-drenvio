import mongoose from "mongoose"

const { MONGODB_URI } = process.env || "mongodb://localhost:27017/"

export const connectDB = async (): Promise<void> => {
  console.log(MONGODB_URI)
  try {
    await mongoose.connect(MONGODB_URI as string)
    console.log("MongoDB is connected")
  } catch (error) {
    console.log(error)
  }
}
