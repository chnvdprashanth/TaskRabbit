import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    image : {
        type: String,
        required: true,
    },
    sub : {
        type: String,
        required: true,
    }
})

export const User = mongoose.model("user", userSchema);