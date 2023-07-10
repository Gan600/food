import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecComponent } from './nec.component';

describe('NecComponent', () => {
  let component: NecComponent;
  let fixture: ComponentFixture<NecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NecComponent]
    });
    fixture = TestBed.createComponent(NecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
