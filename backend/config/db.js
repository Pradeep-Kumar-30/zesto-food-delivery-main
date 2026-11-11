import mongoose from "mongoose"

const connectDb = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not set")
  }
  await mongoose.connect(process.env.MONGODB_URL)
  console.log("db connected")
}

export default connectDb