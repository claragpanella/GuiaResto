import { TestBed } from '@angular/core/testing';

import { GuiarestoService } from './guiaresto.service';

describe('GuiarestoService', () => {
  let service: GuiarestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuiarestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
