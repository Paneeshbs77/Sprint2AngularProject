import { TestBed } from '@angular/core/testing';

import { FlatRentService } from './flat-rent.service';

describe('FlatRentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlatRentService = TestBed.get(FlatRentService);
    expect(service).toBeTruthy();
  });
});