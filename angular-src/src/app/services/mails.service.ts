import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class MailsService {

  constructor(private http: Http) { }

  sendMail(mail) {
    var headers = new Headers();
        var emailid = 'name=';// + usercreds.username;
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:3000/mails/sendmail', emailid, {headers: headers}).subscribe((data) => {
          if(data.json().success) {
              console.log('mail sent');
            }
        })

    }
}
