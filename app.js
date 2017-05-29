// dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// connect to database
mongoose.connect(config.database);

// on database connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

// on database error
mongoose.connection.on('error', (err) => {
    console.log('database error: ' + err);
});

// app init
const app = express();

// users routes
const users = require('./routes/users');

//mail routes
const mails = require('./routes/mails');

const port = 3000;

// allows access from any domain
app.use(cors());

// set static folder ( sets view of the home page )
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// route to users
app.use('/users', users);

// route to mails
app.use('/mails', mails);

// route to the home page(Index)
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

// server startup
app.listen(port, () => {
    console.log( 'WebMailClient server started on port ' + port );
});
