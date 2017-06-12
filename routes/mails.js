const express = require('express');
const router = express.Router();

const Mail = require('../models/mails');


//send mail
router.post('/sendmail', (req, res, next) => {
  let newMail = new Mail({
    from: 'Maciej Rusek <maciejrusek94@gmail.com>',
    to: req.body.recipient,
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

//router.post('/sendmail', Mail.sendMail);

module.exports = router;
