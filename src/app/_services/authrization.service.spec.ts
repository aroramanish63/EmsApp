import { TestBed, inject } from '@angular/core/testing';

import { AuthrizationService } from './authrization.service';

describe('AuthrizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthrizationService]
    });
  });

  it('should be created', inject([AuthrizationService], (service: AuthrizationService) => {
    expect(service).toBeTruthy();
  }));
});
