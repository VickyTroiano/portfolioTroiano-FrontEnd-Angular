import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEditPanelComponent } from './banner-edit-panel.component';

describe('BannerEditPanelComponent', () => {
  let component: BannerEditPanelComponent;
  let fixture: ComponentFixture<BannerEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerEditPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
