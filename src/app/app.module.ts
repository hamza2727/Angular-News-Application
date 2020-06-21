import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ClientService } from './services/client.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/data.service';
import { PanelComponent } from './components/panel/panel.component';


import { DashboardComponent } from './components/panel/dashboard/dashboard.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';



import {} from "googlemaps"
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';


import { AuthInterceptor } from './services/auth.interceptor';
import { NewsdetailsComponent } from './components/panel/newsdetails/newsdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    PanelComponent,
    
    
    DashboardComponent,
    NewsdetailsComponent,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaLzzgyHzhAqW7AvcgFxaU0IIW589VzBk'
    }),
    TabsModule.forRoot(),
  ],
  providers: [ClientService,DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
