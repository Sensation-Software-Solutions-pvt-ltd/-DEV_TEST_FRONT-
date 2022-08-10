import { Route } from '@angular/router';
import { InitialDataResolver } from 'app/app.resolvers';
import { LayoutComponent } from './modules/layout/layout/layout.component';
export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'finance-and-account' },
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'finance-and-account', loadChildren: () => import('app/modules/finance-and-account/finance-and-account.module').then(m => m.FinanceAndAccountModule) },
        ]
    }
];
