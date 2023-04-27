//ROUTES
const { MongoClient } = require('mongodb');

//Set the MongoDB connection URI and database name:
const uri = '<mongodb+srv://Meroni-bcg:DevClass23!@beautybyjailene.bvw8a2l.mongodb.net/test>';
const dbName = 'mydatabase';

//Create a new instance of MongoClient and connect to the MongoDB server:
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect();

//Set the name of the collection to be used and create a new client data object:
const collectionName = 'clients';
const clientData = { name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' };

//Access the desired database using the client object and retrieve the desired collection:
const db = client.db(dbName);
const collection = db.collection(collectionName);

//Insert the client data object into the collection and handle any errors that occur:
collection.insertOne(clientData, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Client data inserted:', result.ops[0]);
  }
});

//Find all clients in the collection with a specified email address and handle any errors that occur:
collection.find({ email: 'johndoe@example.com' }).toArray((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Clients with email johndoe@example.com:', docs);
    }
  });
  