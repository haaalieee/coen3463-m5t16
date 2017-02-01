import { Routes } from '@angular/router';

import { BooksComponent } from './books.component';
//import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
//import { RecipeEditComponent } from  './recipe-edit/recipe-edit.component';

export const BOOKS_ROUTES: Routes = [
    { path: '', component: BooksComponent },
    // { path: 'new', component: RecipeEditComponent },
    // { path: ':id', component: RecipeDetailComponent },
    // { path: ':id/edit', component: RecipeEditComponent }
]