import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)},
      {path: 'order', loadChildren: () => import('./views/order/order-routing.module').then(m => m.OrderRoutingModule)},
      {path: 'products', loadChildren: () => import('./views/products/products-routing.module').then(m => m.ProductsRoutingModule)}
    ]
  },
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
