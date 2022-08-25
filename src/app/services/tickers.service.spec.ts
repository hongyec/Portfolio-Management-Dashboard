import { TestBed } from '@angular/core/testing';

import { TickersService } from './tickers.service';

describe('TickersService', () => {
  let service: TickersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TickersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
