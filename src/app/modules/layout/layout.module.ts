import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseFullscreenModule } from '@fuse/components/fullscreen';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { SharedModule } from 'app/shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { NotificationsModule } from './common/notifications/notifications.module';
import { UserModule } from './common/user/user.module';
import { MessagesModule } from './common/messages/messages.module';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        FuseFullscreenModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        MessagesModule,
        NotificationsModule,
        UserModule,
        SharedModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {
}
