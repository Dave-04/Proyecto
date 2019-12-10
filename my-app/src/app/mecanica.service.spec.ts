import { TestBed } from '@angular/core/testing';

import { MecanicaService } from './mecanica.service';

describe('MecanicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MecanicaService = TestBed.get(MecanicaService);
    expect(service).toBeTruthy();
  });
});
