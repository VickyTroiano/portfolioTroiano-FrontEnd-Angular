import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeEditPanelComponent } from './knowledge-edit-panel.component';

describe('KnowledgeEditPanelComponent', () => {
  let component: KnowledgeEditPanelComponent;
  let fixture: ComponentFixture<KnowledgeEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeEditPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
