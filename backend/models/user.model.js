import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({

    userId: { type: String, required: true, unique: true },
    userName: { type: String, required: true },

}, { timestamps: ture })

const User = mongoose.model("User", userSchema)

export default User