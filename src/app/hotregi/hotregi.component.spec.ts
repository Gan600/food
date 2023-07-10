import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotregiComponent } from './hotregi.component';

describe('HotregiComponent', () => {
  let component: HotregiComponent;
  let fixture: ComponentFixture<HotregiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotregiComponent]
    });
    fixture = TestBed.createComponent(HotregiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
