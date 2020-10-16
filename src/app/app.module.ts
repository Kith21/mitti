import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccumulationChartModule,PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService,FunnelSeriesService } from '@syncfusion/ej2-angular-charts'
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule }  from '@agm/core';
import { DemoComponent } from './demo/demo.component';
import { MailComponent } from './mail/mail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoanComponent } from './loan/loan.component';
import { AccountComponent } from './account/account.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/account', pathMatch: 'full' },

  { path: 'mail', component: MailComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'account', component: AccountComponent },


];

@NgModule({ 
  declarations: [
    AppComponent,
    DemoComponent,
    MailComponent,
    LoanComponent,
    AccountComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true},),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AccumulationChartModule,
    BrowserAnimationsModule,
    MatExpansionModule,

  
    
    

    

  
     
  ],
  providers: [PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService,FunnelSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
