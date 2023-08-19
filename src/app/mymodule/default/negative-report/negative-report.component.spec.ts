import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeReportComponent } from './negative-report.component';

describe('NegativeReportComponent', () => {
  let component: NegativeReportComponent;
  let fixture: ComponentFixture<NegativeReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NegativeReportComponent]
    });
    fixture = TestBed.createComponent(NegativeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
