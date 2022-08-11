import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { ICandidateListModel } from '../../models/finance-and-account/finance-and-account-interface';
import { financeAndAccountService } from '../../services/finance-and-account-service/finance-and-account.service';

@Component({
  selector: 'app-age-debtors',
  templateUrl: './age-debtors.component.html',
  styleUrls: ['./age-debtors.component.scss']
})
export class AgeDebtorsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ["Payee", "Child", "ThreeWeeks", "TwoWeeks", "OneWeeks", "Current", "PendingAmount", "OverPayment", "PendingCredinote", "TotalPendingAmount"];
  calucatedData = {} as ICandidateListModel;
  filter: any = {};
  userList: ICandidateListModel[] = [];
  totalRecord: number = 0;
  public dataSource=new  MatTableDataSource<ICandidateListModel>();

  constructor(private _financeAndAccountService: financeAndAccountService) { }

  ngOnInit(): void {
    this.resetFilter();
    this.getListData(this.filter);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
      this.dataSource.data = result.users;
      this.totalRecord = result && result.pagination && result.pagination.length ? result.pagination.length : 0;
      this.calucatedData = result.calculatedData;
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
