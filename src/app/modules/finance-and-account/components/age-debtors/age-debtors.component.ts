import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { ICandidateListModel, IChildListModel, IPayeeListModel } from '../../models/finance-and-account/finance-and-account-interface';
import { financeAndAccountService } from '../../services/finance-and-account-service/finance-and-account.service';

@Component({
  selector: 'app-age-debtors',
  templateUrl: './age-debtors.component.html',
  styleUrls: ['./age-debtors.component.scss']
})
export class AgeDebtorsComponent implements OnInit {
  isShowMoreSearchOptions: boolean = false;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ["Payee", "Child", "ThreeWeeks", "TwoWeeks", "OneWeeks", "Current", "PendingAmount", "OverPayment", "PendingCredinote", "TotalPendingAmount"];
  calucatedData = {} as ICandidateListModel;
  filter: any = {};
  userList: ICandidateListModel[] = [];
  totalRecord: number = 0;
  childList: IChildListModel[] = [];
  payeeList: IPayeeListModel[] = [];
  myForm: FormGroup;
  public dataSource = new MatTableDataSource<ICandidateListModel>();

  constructor(private _financeAndAccountService: financeAndAccountService,
    public fb: FormBuilder) { }

  initForm() {
    this.myForm = this.fb.group({
      child: [''],
      payee: [''],
      inCreditParent: [false]
    });
  }

  ngOnInit(): void {
    this.resetFilter();
    this.getListData(this.filter);
    this.initForm();
    this.getAllChilds();
    this.getAllPayee();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  resetFilter() {
    this.filter = {
      pageNumber: 1,
      pageSize: 10,
      child: "",
      payee: "",
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

  getAllChilds() {
    this._financeAndAccountService.getAllChilds().subscribe(res => {
      let result: any = res;
      this.childList = result.childs;
    })
  }
  getAllPayee() {
    this._financeAndAccountService.getAllPayee().subscribe(res => {
      let result: any = res;
      this.payeeList = result.payees;
    })
  }

  pageSizeChange(pageSize) {
    this.resetFilter();
    this.filter.pageSize = pageSize;
    this.getListData(this.filter);
  }

  displayActivePage(activePageNumber: number) {
    this.filter.pageNumber = activePageNumber;
    this.getListData(this.filter);
  }

  // (change)="checkCheckBoxvalue($event)"

  checkCheckBoxvalue($event) {
    this.myForm.patchValue([
      {
        inCreditParent: $event.checked
      }
    ])
  }
  submitForm() {
    this.filter.pageNumber = 1;
    let formData: any = this.myForm.value;
    this.filter.child = formData && formData.child && formData.child.Child ? formData.child.Child : "";
    this.filter.payee = formData && formData.payee && formData.payee.Payee ? formData.payee.Payee : "";
    this.getListData(this.filter);
  }
  refresh() {
    this.resetFilter();
    this.getListData(this.filter);
    this.getAllChilds();
    this.getAllPayee();
  }

}
