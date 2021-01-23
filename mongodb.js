/*
C|reate  - Criar
R|ead    - Ler
U|pdate  - Atualizar
D|elete  - Deletar
*/
const mongodb = require('mongodb')
const { MongoClient, ObjectID } = require('mongodb')
 
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// db.collection('user').insertOne = Create   - C
// db.collection('user').find      = Read     - R
// db.collection('user').updateOne = Update   - U
// db.collection('user').deleteOne = Delete   - D
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    const promise = db.collection('users').insertMany([

    ]).then((r) => {
        console.log(r.result)
    }).catch((e) => {
        console.log(e)
    })

    
    
    
    
    // promise.then((result) => {
    //     console.log(result.result)
    // }).catch((e) => {
    //     console.log('Error!')
    // })
})
