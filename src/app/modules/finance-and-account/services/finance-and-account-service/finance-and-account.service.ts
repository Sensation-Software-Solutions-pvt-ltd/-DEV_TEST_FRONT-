// import { Injectable } from "@angular/core";
// @Injectable({
//   providedIn: "root"
// })
// export class financeAndAccountService {
//   // constructor(private _http: HttpService) { }
//   getListData(filter: any = {}) {
//     // let url = "assets/data/list-data.json?PageNo=" + filter.pageNumber + "&PageSize=" + filter.pageSize
//     // return this._http.get(url);
//   }


//   // api/page/listdata
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';

@Injectable({
    providedIn: 'root'
})
export class financeAndAccountService {
    private _financeAndAccountService: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);
    constructor(private _httpClient: HttpClient) {
    }
    get financeAndAccount$(): Observable<Navigation> {
        return this._financeAndAccountService.asObservable();
    }
    getUsersList(filter): Observable<Navigation> {

        let queryParams = new HttpParams();
        queryParams = queryParams.append("page", filter.pageNumber);
        queryParams = queryParams.append("size", filter.pageSize);

        return this._httpClient.get<Navigation>('api/page/listdata', { params: queryParams }).pipe(
            tap((financeAndAccount) => {
                this._financeAndAccountService.next(financeAndAccount);
            })
        );
    }
}

