import mongoose from "mongoose";

// define the User model schema
const UserSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    addressLine1: {
        type: String,
    },
    addressLine2: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    postalCode: {
        type: String,
    },
});

const User = mongoose.model("User", UserSchema);
export default User;