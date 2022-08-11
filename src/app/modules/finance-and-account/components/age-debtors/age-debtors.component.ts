import { Component, OnInit } from '@angular/core';
import { ICandidateListModel } from '../../models/finance-and-account/finance-and-account-interface';
import { financeAndAccountService } from '../../services/finance-and-account-service/finance-and-account.service';

@Component({
  selector: 'app-age-debtors',
  templateUrl: './age-debtors.component.html',
  styleUrls: ['./age-debtors.component.scss']
})
export class AgeDebtorsComponent implements OnInit {
  displayedColumns = ["Payee", "Child", "ThreeWeeks", "TwoWeeks", "OneWeeks", "Current", "PendingAmount", "OverPayment", "PendingCredinote", "TotalPendingAmount"];
  calucatedData={} as ICandidateListModel;
  filter: any = {};
  userList: ICandidateListModel[] = [];
  totalRecord: number = 0;
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
    this._financeAndAccountService.getUsersList(filter).subscribe(res => {
      let result: any = res;
      this.userList = result.users;
      this.totalRecord = result && result.pagination && result.pagination.length ? result.pagination.length : 0;
      this.calucatedData=result.calculatedData;
    })
  }

  pageSizeChange(pageSize) {
    this.resetFilter();
    this.filter.pageSize = pageSize;
    this.getListData(this.filter);
  }

  paginationChange(pageNumber: number) {
    this.filter.pageNumber = pageNumber;
    this.getListData(this.filter);
  }

}
