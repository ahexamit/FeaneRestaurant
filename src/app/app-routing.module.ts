import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./placeorder/placeorder.module').then((m) => m.PlaceorderModule),
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./booktable/booktable.module').then((m) => m.BooktableModule),
  },
  {path:'feedback', loadChildren: () => import('./feedback-form/feedback-form.module').then((m) => m.FeedbackFormModule)},
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
