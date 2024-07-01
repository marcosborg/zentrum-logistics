import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateZcmPage } from './update-zcm.page';

describe('UpdateZcmPage', () => {
  let component: UpdateZcmPage;
  let fixture: ComponentFixture<UpdateZcmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateZcmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
