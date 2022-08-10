import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAndAccountComponent } from './finance-and-account.component';

describe('FinanceAndAccountComponent', () => {
  let component: FinanceAndAccountComponent;
  let fixture: ComponentFixture<FinanceAndAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceAndAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceAndAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
