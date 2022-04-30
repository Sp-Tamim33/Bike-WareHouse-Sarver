const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const port = 5000;
require('dotenv').config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('backend')
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@cluster0.76mh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const bikes = client.db('bikedb').collection('bikes');
        console.log('bikedb conected');

        // get data 
        app.get('/bikes', async (req, res) => {
            const query = {};
            const cursor = bikes.find(query);
            const users = await cursor.toArray();
            res.send(users)
        })

    }
    finally {

    }
}
run().catch(console.dir)


app.listen(port, () => {
    console.log('Backend Runnig')
})