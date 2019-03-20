import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferItemPage } from './offer-item.page';

describe('OfferItemPage', () => {
  let component: OfferItemPage;
  let fixture: ComponentFixture<OfferItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
