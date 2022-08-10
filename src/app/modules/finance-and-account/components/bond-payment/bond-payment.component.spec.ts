import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondPaymentComponent } from './bond-payment.component';

describe('BondPaymentComponent', () => {
  let component: BondPaymentComponent;
  let fixture: ComponentFixture<BondPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
