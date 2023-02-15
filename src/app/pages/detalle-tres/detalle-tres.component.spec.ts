import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTresComponent } from './detalle-tres.component';

describe('DetalleTresComponent', () => {
  let component: DetalleTresComponent;
  let fixture: ComponentFixture<DetalleTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
