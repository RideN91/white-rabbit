import { TestBed } from '@angular/core/testing';

import { Thorchain } from './thorchain.service';

describe('Thorchain', () => {
  let service: Thorchain;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Thorchain);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
