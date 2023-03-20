import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaNavbarComponent } from './prueba-navbar.component';

describe('PruebaNavbarComponent', () => {
  let component: PruebaNavbarComponent;
  let fixture: ComponentFixture<PruebaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
