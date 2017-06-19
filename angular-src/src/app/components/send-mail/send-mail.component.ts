import { Component, OnInit } from '@angular/core';
import { MailsService} from '../../services/mails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  recipient: String;
  subject: String;
  text: String;
  newMail = {
      recipient: this.recipient,
      subject: this.subject,
      text: this.text
    }

  constructor(
    private mailsService: MailsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSendSubmit(){
    this.mailsService.sendMail(this.newMail);
    this.router.navigate(['dashboard']);
  }

}
