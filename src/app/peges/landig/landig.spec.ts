import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landig } from './landig';

describe('Landig', () => {
  let component: Landig;
  let fixture: ComponentFixture<Landig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landig);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
