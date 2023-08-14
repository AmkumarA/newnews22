import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.css']
})
export class BuzzComponent implements OnInit {

  constructor(private api:ServiceService){}
  buzzNewsData:any=[];
   ngOnInit(): void {
     this.api.buzzNews().subscribe((result)=>{
console.log(result.articles);
this.buzzNewsData=result.articles;
     });
   }
}
