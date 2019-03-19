import { TestBed } from '@angular/core/testing';

import { TicketMakerServiceService } from './ticket-maker-service.service';

describe('TicketMakerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketMakerServiceService = TestBed.get(TicketMakerServiceService);
    expect(service).toBeTruthy();
  });
});
