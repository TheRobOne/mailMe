// dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// app init
const app = express();

// users routes
const users = require('./routes/users');

const port = 3000;

// allows access from any domain
app.use(cors());

// set static folder ( sets view of the home page )
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());

// route to users
app.use('/users', users);

// route to the home page(Index)
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// server startup
app.listen(port, () => {
    console.log( 'WebMailClient server started on port ' + port );
});