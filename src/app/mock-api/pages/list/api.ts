import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { child, list, payee } from './data';

@Injectable({
    providedIn: 'root'
})
export class ListDataMockApi {
    private _list: any = list;
    private _payee: any = payee;
    private _child: any = child;

    constructor(private _fuseMockApiService: FuseMockApiService) {
        this.registerHandlers();
    }

    registerHandlers(): void {
        this._fuseMockApiService
            .onGet('api/page/getAllChilds', 300)
            .reply(() =>
                [
                    200,
                    {
                        childs: cloneDeep(this._child),
                    }
                ]
            );

        this._fuseMockApiService
            .onGet('api/page/getAllPayee', 300)
            .reply(() =>
                [
                    200,
                    {
                        payees: cloneDeep(this._payee),
                    }
                ]
            );


        this._fuseMockApiService
            .onPost('api/page/listdata', 300)
            .reply(({ request }) => {
                const page = request.body.pageNumber
                const size = request.body.pageSize
                const child = request.body.child
                const payee = request.body.payee
                let users: any[] | null = cloneDeep(this._list);
                if (child || payee) {
                    users = users.filter(user => user.Child === child || user.Payee === payee);
                }
                const usersLength = users.length;
                const begin = ((page - 1) * size);
                const end = Math.min((size * (page + 1)), usersLength);
                const lastPage = Math.max(Math.ceil(usersLength / size), 1);
                let pagination: any = {};
                let calculatedData: any = {
                    OneWeeks: 0,
                    Current: 0,
                    PendingAmount: 0,
                    OverPayment: 0,
                    PendingCredinote: 0,
                    TotalPendingAmount: 0
                };



                if (page > lastPage) {
                    users = null;
                    pagination = {
                        lastPage
                    };
                }
                else {
                    users = users.slice(begin, end);

                    users.forEach((res: any) => {
                        calculatedData.OneWeeks = calculatedData.OneWeeks + res.OneWeeks;
                        calculatedData.Current = calculatedData.Current + res.Current;
                        calculatedData.PendingAmount = calculatedData.PendingAmount + res.PendingAmount;
                        calculatedData.OverPayment = calculatedData.OverPayment + res.OverPayment;
                        calculatedData.PendingCredinote = calculatedData.PendingCredinote + res.PendingCredinote;
                        calculatedData.TotalPendingAmount = calculatedData.TotalPendingAmount + res.TotalPendingAmount;
                    })
                    pagination = {
                        length: usersLength,
                        size: size,
                        page: page,
                        lastPage: lastPage,
                        startIndex: begin,
                        endIndex: end - 1
                    };
                }
                return [
                    200,
                    {
                        users,
                        pagination,
                        calculatedData,
                    }
                ];
            });
    }

}
