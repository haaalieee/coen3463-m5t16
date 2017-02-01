import { BOOKS_ROUTES } from './books/books.routes';
import { Routes, RouterModule } from "@angular/router";

import { BooksComponent } from "./books/books.component";
//import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    //{ path: 'books', component: BooksComponent},
    { path: 'books', component: BooksComponent, children: BOOKS_ROUTES },
    //{ path: 'shopping-list', component: ShoppingListComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);