require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('601189b70c06f611fe02ffa9').then( () => {
    return Task.countDocuments({ completed: false })
}).then( uncompletedTasks => {
    console.log(uncompletedTasks)
}).catch( error => {
    console.log(error)
})