import { TestBed } from '@angular/core/testing';

import { AutorItemsService } from './autor-items.service';

describe('AutorItemsService', () => {
  let service: AutorItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
