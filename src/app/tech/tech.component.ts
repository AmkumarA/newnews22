import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit{
  constructor( private api:ServiceService){}
  TechNewsData:any=[];
ngOnInit(): void {
  this.api.tcTechNews().subscribe((result)=>{
    console.log(result.articles);
    this.  TechNewsData=result.articles;
  })
}
}
