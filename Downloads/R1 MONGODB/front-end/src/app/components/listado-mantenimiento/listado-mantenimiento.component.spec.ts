import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMantenimientoComponent } from './listado-mantenimiento.component';

describe('ListadoMantenimientoComponent', () => {
  let component: ListadoMantenimientoComponent;
  let fixture: ComponentFixture<ListadoMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoMantenimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
