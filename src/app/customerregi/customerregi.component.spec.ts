import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerregiComponent } from './customerregi.component';

describe('CustomerregiComponent', () => {
  let component: CustomerregiComponent;
  let fixture: ComponentFixture<CustomerregiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerregiComponent]
    });
    fixture = TestBed.createComponent(CustomerregiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
