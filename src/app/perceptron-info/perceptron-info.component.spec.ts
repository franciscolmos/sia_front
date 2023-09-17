import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerceptronInfoComponent } from './perceptron-info.component';

describe('PerceptronInfoComponent', () => {
  let component: PerceptronInfoComponent;
  let fixture: ComponentFixture<PerceptronInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerceptronInfoComponent]
    });
    fixture = TestBed.createComponent(PerceptronInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
