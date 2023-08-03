import { TestBed } from '@angular/core/testing';

import { AsanaService } from './asana.service';

describe('AsanaService', () => {
  let service: AsanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
