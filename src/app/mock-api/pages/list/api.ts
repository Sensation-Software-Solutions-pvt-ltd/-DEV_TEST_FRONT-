import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { list } from './data';

@Injectable({
    providedIn: 'root'
})
export class ListDataMockApi {
    private _list: any = list;
    constructor(private _fuseMockApiService: FuseMockApiService) {
        this.registerHandlers();
    }
    registerHandlers(): void {
        this._fuseMockApiService
            .onGet('api/page/listdata', 300)
            .reply(({ request }) => {
                const page = parseInt(request.params.get('page') ?? '1', 10);
                const size = parseInt(request.params.get('size') ?? '10', 10);
                let users: any[] | null = cloneDeep(this._list);
                const usersLength = users.length;
                const begin = page * size;
                const end = Math.min((size * (page + 1)), usersLength);
                const lastPage = Math.max(Math.ceil(usersLength / size), 1);
                let pagination = {};
                if (page > lastPage) {
                    users = null;
                    pagination = {
                        lastPage
                    };
                }
                else {
                    users = users.slice(begin, end);
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
                        pagination
                    }
                ];
            });

    }



}
