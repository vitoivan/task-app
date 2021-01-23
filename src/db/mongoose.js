const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const user1 = new User({
    name: 'Duda',
    age: 22
})

user1.save().then((r) => {
    console.log(user1)
}).catch((e) =>{
    console.log(e)
})