import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMatches } from './upcoming-matches';

describe('UpcomingMatches', () => {
  let component: UpcomingMatches;
  let fixture: ComponentFixture<UpcomingMatches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingMatches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingMatches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
