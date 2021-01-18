/*
C|reate  - Criar
R|ead    - Ler
U|pdate  - Atualizar
D|elete  - Deletar
*/
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }
    // Criando nova ''tabela'' --> Create
    const db = client.db(databaseName)
    
    db.collection('users').insertOne({
        name: 'Victor',
        age: 20
    }, (e, result) => {
        if(e){
            return console.log('Unable to insert user')
        }
        // result.ops = result operation = objeto que foi guardado no banco
        console.log(result.ops)
    })
})