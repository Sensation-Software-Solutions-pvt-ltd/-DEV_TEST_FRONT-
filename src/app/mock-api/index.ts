
import { IconsMockApi } from 'app/mock-api/ui/icons/api';
import { UserMockApi } from 'app/mock-api/common/user/api';
import { MessagesMockApi } from './common/messages/api';
import { NavigationMockApi } from './common/navigation/api';
import { NotificationsMockApi } from './common/notifications/api';
import { ListDataMockApi } from './pages/list/api';

export const mockApiServices = [
    MessagesMockApi,
    NavigationMockApi,
    NotificationsMockApi,
    IconsMockApi,
    UserMockApi,

    ListDataMockApi,
];
