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
            .onGet('api/page/listdata')
            .reply(() => [200, cloneDeep(this._list)]);


    }
}
