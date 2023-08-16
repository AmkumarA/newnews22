import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { TechComponent } from './tech/tech.component';
import { BuzzComponent } from './buzz/buzz.component';
import { SportComponent } from './sport/sport.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
const routes: Routes = [
  {path:'',component:TopheadlinesComponent, pathMatch:"full"},
  {path:'tech', component:TechComponent, pathMatch:"full"},
  {path:'buzz', component:BuzzComponent, pathMatch:"full"},
  {path:'sport', component:SportComponent, pathMatch:"full"},
  {path:'entertain', component:EntertainmentComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
