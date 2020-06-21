import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PanelComponent } from './components/panel/panel.component';
import { DashboardComponent } from './components/panel/dashboard/dashboard.component';
import { NewsdetailsComponent } from './components/panel/newsdetails/newsdetails.component';
import { NewsApiKeyConfig } from 'angular-news-api';
import { NgnewsModule } from 'angular-news-api';

const newsApiConfig: NewsApiKeyConfig = {
  key: 'c0eb3a457c3847b496da1ee54180d9db'
};


const routes: Routes = [

  { path: '', redirectTo: 'panel/dashboard', pathMatch: 'full' },


  {
    path: 'panel', component: PanelComponent, children: [


      
      { path: 'dashboard', component: DashboardComponent },
      { path: 'newsdetail', component: NewsdetailsComponent },
    
      
    ]
  },
  { path: '**', component: DashboardComponent }

];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes),
    BrowserModule,
    NgnewsModule.forRoot(newsApiConfig)
  
  
  ],

  
  exports: [RouterModule]
})
export class AppRoutingModule { }
