import { TestBed } from '@angular/core/testing';

import { RickYMortyService } from './rick-y-morty.service';

describe('RickYMortyService', () => {
  let service: RickYMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickYMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
