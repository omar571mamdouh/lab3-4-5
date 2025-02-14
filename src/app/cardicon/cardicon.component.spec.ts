import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiconComponent } from './cardicon.component';

describe('CardiconComponent', () => {
  let component: CardiconComponent;
  let fixture: ComponentFixture<CardiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardiconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
