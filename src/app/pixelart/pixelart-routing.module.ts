import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    // Path Pixelart Cards
    path: 'catalog',
    component: ListComponent
    // ,
    // canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: DetailComponent
    // ,
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
    // ,
    // canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PixelartRoutingModule { }