import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { AlarmComponent } from './alarm/alarm.component';

import { loginGuard } from 'src/app/service/login.guard';

const routes: Routes = [
  {
    path:"default", //must not be empty if use loginGuard
    component:DefaultComponent,
    canActivate:[loginGuard],
    children:[
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"report",
        component:ReportComponent
      },
      {
        path:"keywords",
        component:KeywordsComponent
      },
      {
        path:"alarm",
        component:AlarmComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
