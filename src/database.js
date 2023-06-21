import mongoose from "mongoose";

export const connectMongo = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/my_notes");
        console.log("Mongo is connected");
    } catch (error) {
        console.log(error);
    }
};