import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEditPanelComponent } from './social-edit-panel.component';

describe('SocialEditPanelComponent', () => {
  let component: SocialEditPanelComponent;
  let fixture: ComponentFixture<SocialEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialEditPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
