import { TestBed, inject } from '@angular/core/testing';

import { WebeventsService } from './webservice.service';

describe('WebeventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebeventsService]
    });
  });

  it('should ...', inject([WebeventsService], (service: WebeventsService) => {
    expect(service).toBeTruthy();
  }));
});
