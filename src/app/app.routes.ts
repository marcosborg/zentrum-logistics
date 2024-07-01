import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'request/:form_data_id',
    loadComponent: () => import('./request/request.page').then( m => m.RequestPage)
  },
  {
    path: 'photo/:form_data_id',
    loadComponent: () => import('./photo/photo.page').then( m => m.PhotoPage)
  },
  {
    path: 'products/:form_data_id',
    loadComponent: () => import('./products/products.page').then( m => m.ProductsPage)
  },
  {
    path: 'product/:product_id/:form_data_id',
    loadComponent: () => import('./product/product.page').then( m => m.ProductPage)
  },
  {
    path: 'update-zcm/:form_data_id',
    loadComponent: () => import('./update-zcm/update-zcm.page').then( m => m.UpdateZcmPage)
  },


];
