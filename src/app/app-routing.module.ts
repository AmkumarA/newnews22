import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { TechComponent } from './tech/tech.component';
import { BuzzComponent } from './buzz/buzz.component';
import { SportComponent } from './sport/sport.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
const routes: Routes = [
  {path:'',component:TopheadlinesComponent},
  {path:'tech', component:TechComponent},
  {path:'buzz', component:BuzzComponent},
  {path:'sport', component:SportComponent},
  {path:'entertain', component:EntertainmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
