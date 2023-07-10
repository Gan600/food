import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotalregiComponent } from './hotalregi.component';

describe('HotalregiComponent', () => {
  let component: HotalregiComponent;
  let fixture: ComponentFixture<HotalregiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotalregiComponent]
    });
    fixture = TestBed.createComponent(HotalregiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
