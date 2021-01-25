const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        validate(age){
            if (age < 0) throw new Error("Age must be a positive number")
        }
    },
    email: {
        type: String,
        required: true,
        validate(email){
            if(!validator.isEmail(email )) throw new Error("Invalid email")
        }
    }
    
})
// --------------------- New User -------------------------------- //
const user1 = new User({
    name: 'Ivan Victor',
    age: 85,
    email: 'viictor.ivan@hotmail.com'
})

// --------------------- Promise depois de salvar o user na collection -------------------------------- //
user1.save().then((r) => {
    console.log(user1)
}).catch((e) =>{
    console.log('Error:  ' + e)
})