// dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// app init
const app = express();

const port = 3000;

// route to the home page
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// server startup
app.listen(port, () => {
    console.log( 'WebMailClient server started on port ' + port );
});