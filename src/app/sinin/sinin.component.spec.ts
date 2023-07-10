import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SininComponent } from './sinin.component';

describe('SininComponent', () => {
  let component: SininComponent;
  let fixture: ComponentFixture<SininComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SininComponent]
    });
    fixture = TestBed.createComponent(SininComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
