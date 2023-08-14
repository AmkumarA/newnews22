import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit{
 constructor(private api:ServiceService){}
 SportNewsData:any=[];
 ngOnInit(): void {
   this.api.spNews().subscribe((result)=>{
console.log( result.articles);
this.SportNewsData=result.articles
   })
 }


}
