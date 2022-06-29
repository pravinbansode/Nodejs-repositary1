const { MongoClient} = require('mongodb');   // mongo connected with node js
const url = 'mongodb://0.0.0.0:27017';
const database= 'e-comm'                     // mongo database cnnected with node js

const Client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  


async function dbconnect()
{
    let result= await Client.connect();
        db= result.db(database);
       return  db.collection('products');
}

module.exports = dbconnect;
