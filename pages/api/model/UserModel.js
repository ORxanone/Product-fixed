const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserScheam = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Minimum password length is 6 characters"],
    },
    product: [{type: mongoose.Types.ObjectId, ref: "Product"}]
})
const User = mongoose.model('User', UserScheam);
module.exports = User