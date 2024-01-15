import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsModaleComponent } from './instructions-modale.component';

describe('InstructionsModaleComponent', () => {
  let component: InstructionsModaleComponent;
  let fixture: ComponentFixture<InstructionsModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructionsModaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructionsModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
