import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { authGuard } from './guards/auth.guard';
import { CardiconComponent } from './cardicon/cardicon.component';

export const routes: Routes = [
    {
       path:'',
       component: RecipeListComponent,
       title: 'Products page'
    },
     {
       path: 'login',
       component: LoginComponent,
       title:'login page',
       canActivate : [authGuard]
     },
     {
      path:'register',
      component: RegisterComponent,
      title: 'register page'
     },
     {
      path: 'cardicon',
      component: CardiconComponent,
      title: 'card page',
     },
     {
      path:'recipe-details/:id',
      component: RecipeDetailsComponent,
      title: 'details page'
     },
     {
      path:'**',
      component: NotFoundComponent,
      title: 'error'
     }
];
