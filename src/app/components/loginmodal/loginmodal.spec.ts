import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginmodal } from './loginmodal';

describe('Loginmodal', () => {
  let component: Loginmodal;
  let fixture: ComponentFixture<Loginmodal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginmodal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginmodal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
