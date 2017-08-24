import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDetailsRouteComponent } from './training-details-route.component';

describe('TrainingDetailsRouteComponent', () => {
  let component: TrainingDetailsRouteComponent;
  let fixture: ComponentFixture<TrainingDetailsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDetailsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDetailsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
