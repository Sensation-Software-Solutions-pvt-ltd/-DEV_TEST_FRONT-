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
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';

@Injectable({
    providedIn: 'root'
})
export class financeAndAccountService
{
    private _financeAndAccountService: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);
    constructor(private _httpClient: HttpClient)
    {
    }
    get financeAndAccount$(): Observable<Navigation>
    {
        return this._financeAndAccountService.asObservable();
    }
    get(): Observable<Navigation>
    {
        return this._httpClient.get<Navigation>('api/page/listdata').pipe(
            tap((financeAndAccount) => {
                this._financeAndAccountService.next(financeAndAccount);
            })
        );
    }
}

