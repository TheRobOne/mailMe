import { TestBed, inject } from '@angular/core/testing';

import { MailsService } from './mails.service';

describe('MailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailsService]
    });
  });

  it('should be created', inject([MailsService], (service: MailsService) => {
    expect(service).toBeTruthy();
  }));
});
