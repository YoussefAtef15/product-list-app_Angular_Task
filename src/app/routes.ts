// src/app/routes.ts

import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProductAdminComponent } from './components/admin/product-admin/product-admin.component';



export const routes: Routes = [

  { path: '', redirectTo: 'products', pathMatch: 'full' },

  { path: 'products', component: ProductListComponent },

  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/products', component: ProductAdminComponent }
];
