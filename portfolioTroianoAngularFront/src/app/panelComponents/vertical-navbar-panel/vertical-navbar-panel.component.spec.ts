import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavbarPanelComponent } from './vertical-navbar-panel.component';

describe('VerticalNavbarPanelComponent', () => {
  let component: VerticalNavbarPanelComponent;
  let fixture: ComponentFixture<VerticalNavbarPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalNavbarPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalNavbarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
