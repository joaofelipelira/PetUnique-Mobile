import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessPagePage } from './success-page.page';

describe('SuccessPagePage', () => {
  let component: SuccessPagePage;
  let fixture: ComponentFixture<SuccessPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
