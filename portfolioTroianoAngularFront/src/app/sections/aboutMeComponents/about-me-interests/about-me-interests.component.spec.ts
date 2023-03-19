import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeInterestsComponent } from './about-me-interests.component';

describe('AboutMeInterestsComponent', () => {
  let component: AboutMeInterestsComponent;
  let fixture: ComponentFixture<AboutMeInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeInterestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
