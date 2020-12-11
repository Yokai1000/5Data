import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEvolutionComponent } from './time-evolution.component';

describe('TimeEvolutionComponent', () => {
  let component: TimeEvolutionComponent;
  let fixture: ComponentFixture<TimeEvolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEvolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
