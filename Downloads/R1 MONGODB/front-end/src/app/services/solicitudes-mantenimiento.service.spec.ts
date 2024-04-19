import { TestBed } from '@angular/core/testing';

import { SolicitudesMantenimientoService } from './solicitudes-mantenimiento.service';

describe('SolicitudesMantenimientoService', () => {
  let service: SolicitudesMantenimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesMantenimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
