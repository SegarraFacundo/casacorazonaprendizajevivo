import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUnoComponent } from './detalle-uno.component';

describe('DetalleUnoComponent', () => {
  let component: DetalleUnoComponent;
  let fixture: ComponentFixture<DetalleUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
