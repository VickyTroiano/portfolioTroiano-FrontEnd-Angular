import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEditPanelComponent } from './education-edit-panel.component';

describe('EducationEditPanelComponent', () => {
  let component: EducationEditPanelComponent;
  let fixture: ComponentFixture<EducationEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationEditPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
