import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminregiComponent } from './adminregi.component';

describe('AdminregiComponent', () => {
  let component: AdminregiComponent;
  let fixture: ComponentFixture<AdminregiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminregiComponent]
    });
    fixture = TestBed.createComponent(AdminregiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
