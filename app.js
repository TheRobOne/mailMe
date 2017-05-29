// dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const googleCredentials = require('./config/google_credentials');
const session = require('express-session');
const RedisStore = require('connect-redis')( session );

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
app.use( session({
	secret: 'cookie_secret',
	name:   'kaas',
	store:  new RedisStore({
		host: '127.0.0.1',
		port: 6379
	}),
	proxy:  true,
    resave: true,
    saveUninitialized: true
}));
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

var GOOGLE_CLIENT_ID      = googleCredentials.web.client_id,
  GOOGLE_CLIENT_SECRET  = googleCredentials.web.client_secret;

// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the GoogleStrategy within Passport.
passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,

    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    process.nextTick(function () {

      return done(null, profile);
    });
  }
));

// GET /auth/google, set scopes
app.get('/auth/google', passport.authenticate('google', { scope: [
       'https://mail.google.com/']
}));


// GET /auth/google/callback
app.get( '/auth/google/callback',
    	passport.authenticate( 'google', {
    		successRedirect: '/',
    		failureRedirect: '/login'
}));

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// server startup
app.listen(port, () => {
    console.log( 'WebMailClient server started on port ' + port );
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}
