import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePersonalComponent } from './about-me-personal.component';

describe('AboutMePersonalComponent', () => {
  let component: AboutMePersonalComponent;
  let fixture: ComponentFixture<AboutMePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMePersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
