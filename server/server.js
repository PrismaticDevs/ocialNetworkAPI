require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect('mongodb://localhost:27017/server')
    .then(async() => {
        console.log('Successfully connected to mongodb');
    })
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));