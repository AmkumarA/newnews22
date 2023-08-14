import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {
constructor( private api:ServiceService){}
// display headlines data

topHeadlinesData:any=[];
ngOnInit(): void {
  this.api.topHeadlines().subscribe((result)=>{
    console.log(result.articles);
    this.topHeadlinesData=result.articles;
  })
}
}
