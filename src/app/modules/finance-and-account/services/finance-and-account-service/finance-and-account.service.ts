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
        return this._httpClient.post<Navigation>('api/page/listdata', filter).pipe(
            tap((financeAndAccount) => {
                this._financeAndAccountService.next(financeAndAccount);
            })
        );
    }

    getAllChilds(): Observable<Navigation> {
        return this._httpClient.get<Navigation>('api/page/getAllChilds').pipe(
            tap((financeAndAccount) => {
                this._financeAndAccountService.next(financeAndAccount);
            })
        );
    }
    getAllPayee() {
        return this._httpClient.get<Navigation>('api/page/getAllPayee').pipe(
            tap((financeAndAccount) => {
                this._financeAndAccountService.next(financeAndAccount);
            })
        );

    }
}

