import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { Product } from './pages/product/product';
import { Signup } from './pages/signup/signup';
import { EditStory } from './pages/edit-story/edit-story';

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
    },
    {
        path: 'add-story',
        component: AddStory
    },
    {
        path: 'edit/:id',
        component: EditStory
    },
    {
        path: 'product',
        component: Product
    },
    {
        path: 'signup',
        component: Signup
    }
];
