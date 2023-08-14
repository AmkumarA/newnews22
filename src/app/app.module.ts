import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import {HttpClientModule} from '@angular/common/http'
import {ServiceService} from './services/service.service';
import { TechComponent } from './tech/tech.component';
import { BuzzComponent } from './buzz/buzz.component';
import { SportComponent } from './sport/sport.component';
import { EntertainmentComponent } from './entertainment/entertainment.component'
@NgModule({
  declarations: [
    AppComponent,
    TopheadlinesComponent,
    TechComponent,
    BuzzComponent,
    SportComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
