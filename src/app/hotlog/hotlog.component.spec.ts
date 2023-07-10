import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlogComponent } from './hotlog.component';

describe('HotlogComponent', () => {
  let component: HotlogComponent;
  let fixture: ComponentFixture<HotlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotlogComponent]
    });
    fixture = TestBed.createComponent(HotlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
