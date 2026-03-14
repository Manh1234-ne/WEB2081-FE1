import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Stories } from './pages/stories/stories';

export const routes: Routes = [
    {
        path: 'home', // Ko thêm / vào đầu đường dẫn
        component: Home,
    },
    {
        path: 'contact',
        component: Contact,
    },
    {
        path: 'products',
        component: Products,
        children: [
            { path: ':slug', component: ProductDetail },
        ],
    },
    {
        path: 'stories',
        component: Stories
    }
];
