const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true, 
        lowercase: true,
        trim: true,
        validate(email){
            if(!validator.isEmail(email )) throw new Error("Invalid email")
        }  
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(password){
            if(password.toLowerCase().includes('password')) throw new Error("Password cannot contain 'password'")
        }
    }
})

module.exports = User