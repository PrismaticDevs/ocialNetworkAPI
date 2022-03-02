const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const session = require('express-session');
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}

mongoose.connect('mongodb://localhost:27017/server')
    .then(async() => {
        console.log('Successfully connected to mongodb');
    })
    .catch(err => console.log(err));

app.use(session(sessionSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));