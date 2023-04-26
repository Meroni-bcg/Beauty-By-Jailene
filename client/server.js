const { MongoClient } = require('mongodb');

const uri = '<mongodb+srv://Meroni-bcg:DevClass23!@beautybyjailene.bvw8a2l.mongodb.net/test>';
const dbName = 'mydatabase';

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect();

const collectionName = 'clients';
const clientData = { name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' };

const db = client.db(dbName);
const collection = db.collection(collectionName);

collection.insertOne(clientData, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Client data inserted:', result.ops[0]);
  }
});

collection.find({ email: 'johndoe@example.com' }).toArray((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Clients with email johndoe@example.com:', docs);
    }
  });
  