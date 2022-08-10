import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceAndAccountComponent } from './pages/finance-and-account/finance-and-account.component';
const routes: Routes = [
  {
    path: "",
    component: FinanceAndAccountComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceAndAccountRoutingModule { }
