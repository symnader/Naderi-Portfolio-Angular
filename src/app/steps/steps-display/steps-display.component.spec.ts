import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsDisplayComponent } from './steps-display.component';

describe('StepsDisplayComponent', () => {
  let component: StepsDisplayComponent;
  let fixture: ComponentFixture<StepsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
