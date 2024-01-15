import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultModaleComponent } from './result-modale.component';

describe('ResultModaleComponent', () => {
  let component: ResultModaleComponent;
  let fixture: ComponentFixture<ResultModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultModaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
