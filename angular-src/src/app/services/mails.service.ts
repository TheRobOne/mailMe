import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class MailsService {

  constructor(private http: Http) { }

  sendMail(mail) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/mails/send', mail, { headers: headers })
      .map(res => res.json());
  }
}
