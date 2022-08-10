import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceAndAccountRoutingModule } from './finance-and-account-routing.module';
import { FinanceAndAccountComponent } from './pages/finance-and-account/finance-and-account.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { CreditNotesComponent } from './components/credit-notes/credit-notes.component';
import { BondPaymentComponent } from './components/bond-payment/bond-payment.component';
import { AgeDebtorsComponent } from './components/age-debtors/age-debtors.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    FinanceAndAccountRoutingModule,
    NgxPaginationModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    FinanceAndAccountComponent,
    TransactionListComponent,
    InvoicesComponent,
    PaymentsComponent,
    CreditNotesComponent,
    BondPaymentComponent,
    AgeDebtorsComponent
  ]
})
export class FinanceAndAccountModule { }

