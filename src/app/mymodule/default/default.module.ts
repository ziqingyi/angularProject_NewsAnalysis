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

//for [(ngModel)]
import { FormsModule } from '@angular/forms';

import {  NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { HighchartsChartModule } from 'highcharts-angular';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { nzModalAnimations, NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';

//notification
import{NzMessageModule} from 'ng-zorro-antd/message';

import { FormattimePipe } from '../../pipe/formattime.pipe';
import { PositiveReportComponent } from './positive-report/positive-report.component';
import { NegativeReportComponent } from './negative-report/negative-report.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ReportComponent,
    KeywordsComponent,
    AlarmComponent,
    FormattimePipe,
    PositiveReportComponent,
    NegativeReportComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzBreadCrumbModule,
    HighchartsChartModule,
    NzDatePickerModule,
    FormsModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzInputModule,
    NzMessageModule
  ],

  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ]

})
export class DefaultModule { }
