import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { coursGuard } from './cours-guard';

describe('coursGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => coursGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
