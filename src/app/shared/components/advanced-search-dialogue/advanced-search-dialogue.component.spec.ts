import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchDialogueComponent } from './advanced-search-dialogue.component';

describe('AdvancedSearchDialogueComponent', () => {
  let component: AdvancedSearchDialogueComponent;
  let fixture: ComponentFixture<AdvancedSearchDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedSearchDialogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedSearchDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
