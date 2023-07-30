import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { AlarmComponent } from './alarm/alarm.component';


//antd modules
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import {  NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


registerLocaleData(en);

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ReportComponent,
    KeywordsComponent,
    AlarmComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzBreadCrumbModule
  ],

  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ]

})
export class DefaultModule { }
