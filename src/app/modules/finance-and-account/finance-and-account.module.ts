import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceAndAccountRoutingModule } from './finance-and-account-routing.module';
import { FinanceAndAccountComponent } from './pages/finance-and-account/finance-and-account.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    FinanceAndAccountRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    FinanceAndAccountComponent
  ]
})
export class FinanceAndAccountModule { }

