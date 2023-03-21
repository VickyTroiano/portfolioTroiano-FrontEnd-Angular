import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEditPanelComponent } from './projects-edit-panel.component';

describe('ProjectsEditPanelComponent', () => {
  let component: ProjectsEditPanelComponent;
  let fixture: ComponentFixture<ProjectsEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsEditPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
