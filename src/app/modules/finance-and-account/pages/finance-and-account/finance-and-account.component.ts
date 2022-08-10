import { Component, OnInit } from '@angular/core';
import { ICandidateListModel } from '../../models/finance-and-account/finance-and-account-interface';
import { financeAndAccountService } from '../../services/finance-and-account-service/finance-and-account.service';

@Component({
  selector: 'app-finance-and-account',
  templateUrl: './finance-and-account.component.html',
  styleUrls: ['./finance-and-account.component.css']
})
export class FinanceAndAccountComponent implements OnInit {
  filter: any = {};
  userList: ICandidateListModel[] = [];
  constructor(private _financeAndAccountService: financeAndAccountService) { }

  ngOnInit(): void {
    this.resetFilter();
    this.getListData(this.filter);
  }

  resetFilter() {
    this.filter = {
      pageNumber: 1,
      pageSize: 10
    }
  }

  getListData(filter: any = {}) {
    this._financeAndAccountService.get().subscribe(res => {
      let result: any = res;
      console.log(result);
    })

  }

}
