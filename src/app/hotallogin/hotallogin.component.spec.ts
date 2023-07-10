import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotalloginComponent } from './hotallogin.component';

describe('HotalloginComponent', () => {
  let component: HotalloginComponent;
  let fixture: ComponentFixture<HotalloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotalloginComponent]
    });
    fixture = TestBed.createComponent(HotalloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
