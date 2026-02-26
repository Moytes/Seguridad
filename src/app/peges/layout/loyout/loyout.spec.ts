import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loyout } from './loyout';

describe('Loyout', () => {
  let component: Loyout;
  let fixture: ComponentFixture<Loyout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loyout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loyout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
