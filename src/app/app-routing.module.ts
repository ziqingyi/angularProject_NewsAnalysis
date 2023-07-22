import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren:() => import('./mymodule/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'default',
    loadChildren:() => import('./mymodule/default/default.module').then(m=>m.DefaultModule)
  },
  {
    path:'**',
    redirectTo:"/login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
