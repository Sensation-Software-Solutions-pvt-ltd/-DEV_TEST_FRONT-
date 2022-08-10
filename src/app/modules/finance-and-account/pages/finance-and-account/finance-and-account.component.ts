import { Component, OnInit } from '@angular/core';
import { ICandidateListModel } from '../../models/finance-and-account/finance-and-account-interface';
import { financeAndAccountService } from '../../services/finance-and-account-service/finance-and-account.service';

@Component({
  selector: 'app-finance-and-account',
  templateUrl: './finance-and-account.component.html',
  styleUrls: ['./finance-and-account.component.css']
})
export class FinanceAndAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
  }


}
