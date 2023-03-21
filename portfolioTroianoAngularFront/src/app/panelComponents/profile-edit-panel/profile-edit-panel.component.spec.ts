import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditPanelComponent } from './profile-edit-panel.component';

describe('ProfileEditPanelComponent', () => {
  let component: ProfileEditPanelComponent;
  let fixture: ComponentFixture<ProfileEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
