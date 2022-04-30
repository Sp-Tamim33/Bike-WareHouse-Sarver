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


app.listen(port, () => {
    console.log('Backend Runnig')
})