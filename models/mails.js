const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const config = require('../config/google_credentials');

module.exports.sendMail =  function(req, res) {

      let transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            type: 'OAuth2',
            user: config.user.user,
            clientId: config.user.clientId,
            clientSecret: config.user.clientSecret,
            refreshToken: config.user.refreshToken,
            accessToken: config.user.accessToken,
            expires: config.user.expires
          }
      });

      var mailOptions = {
          from: 'Maciej Rusek <maciejrusek94@gmail.com>',
          to: 'maciejrusek94@gmail.com',
          subject: 'Nodemailer test',
          text: 'Hello World!!'
      }

      transporter.sendMail(mailOptions, function (err, res) {
          if(err){
              console.log('Error');
          } else {
              console.log('Email Sent');
            }
      })
  }
