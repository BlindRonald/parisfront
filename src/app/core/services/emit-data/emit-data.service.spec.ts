import { TestBed } from '@angular/core/testing';

import { EmitDataService } from './emit-data.service';

describe('EmitDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmitDataService = TestBed.get(EmitDataService);
    expect(service).toBeTruthy();
  });
});
