import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path: 'home', // Ko thêm / vào đầu đường dẫn
        component: Home,
    },
    {
        path: 'contact',
        component: Contact,
    }
];
