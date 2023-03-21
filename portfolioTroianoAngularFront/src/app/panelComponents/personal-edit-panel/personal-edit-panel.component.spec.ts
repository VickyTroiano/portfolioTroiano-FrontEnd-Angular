import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEditPanelComponent } from './personal-edit-panel.component';

describe('PersonalEditPanelComponent', () => {
  let component: PersonalEditPanelComponent;
  let fixture: ComponentFixture<PersonalEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalEditPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
