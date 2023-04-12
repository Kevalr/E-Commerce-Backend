const mongoose = require('mongoose');

//Creating Schema for User document
const userSchema = mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

//Creating the user model with userSchema
const User = mongoose.model('user',userSchema);

//Exporting the User model to be used by other files
module.exports = User;