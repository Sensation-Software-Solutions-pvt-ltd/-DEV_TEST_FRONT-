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
import { MatSortModule } from '@angular/material/sort';
import { FuseCardModule } from '@fuse/components/card'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,  
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
     
   

    
    FinanceAndAccountRoutingModule,
    NgxPaginationModule,
    FuseCardModule,
  
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

