const express = require('express');
const router = express.Router();

const Mail = require('../models/mails');


//send mail
router.post('/send', (req, res, next) => {
  let newMail = new Mail({
    destination: req.body.destination,
    subject: req.body.subject,
    text: req.body.text
  });

  Mail.sendMail(newMail, (err, user) => {
    if(err){
      res.json({success: false, msg: 'Failed to send mail'});
    } else {
      res.json({succes: true, msg: 'Mail sent'});
    }
  });
});

// Send
router.get('/send', (req, res, next) => {

});

module.exports = router;