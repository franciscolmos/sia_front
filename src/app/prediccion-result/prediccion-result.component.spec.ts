import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediccionResultComponent } from './prediccion-result.component';

describe('PrediccionResultComponent', () => {
  let component: PrediccionResultComponent;
  let fixture: ComponentFixture<PrediccionResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrediccionResultComponent]
    });
    fixture = TestBed.createComponent(PrediccionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
