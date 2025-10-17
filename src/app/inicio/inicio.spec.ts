import { ComponentFixture, TestBed } from '@angular/core/testing';

import { inicioC } from './inicio';

describe('Inicio', () => {
  let component: inicioC;
  let fixture: ComponentFixture<inicioC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [inicioC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(inicioC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
