const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
       // enum: Male || Female,
        required: true
    }
},{timestamps:true})

const UserSchemaModel = mongoose.model('userSchema', UserSchema)
module.exports = UserSchemaModel