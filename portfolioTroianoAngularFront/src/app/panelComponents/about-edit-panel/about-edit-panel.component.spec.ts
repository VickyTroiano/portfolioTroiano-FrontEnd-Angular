import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEditPanelComponent } from './about-edit-panel.component';

describe('AboutEditPanelComponent', () => {
  let component: AboutEditPanelComponent;
  let fixture: ComponentFixture<AboutEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEditPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
