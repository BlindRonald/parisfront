import { TestBed } from '@angular/core/testing';

import { ModalTecladoService } from './modal-teclado.service';

describe('ModalTecladoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalTecladoService = TestBed.get(ModalTecladoService);
    expect(service).toBeTruthy();
  });
});
