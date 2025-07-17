import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTable } from './match-table';

describe('MatchTable', () => {
  let component: MatchTable;
  let fixture: ComponentFixture<MatchTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
