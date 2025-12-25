import mongoose from "mongoose";

export const connectDB = async () => {
   await mongoose.connect ('mongodb+srv://mano:manoj123@cluster0.nrklab1.mongodb.net/SUVAI').then(() => console.log("DB Connected"))
}
