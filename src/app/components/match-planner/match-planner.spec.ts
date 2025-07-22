import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPlanner } from './match-planner';

describe('MatchPlanner', () => {
  let component: MatchPlanner;
  let fixture: ComponentFixture<MatchPlanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchPlanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchPlanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
