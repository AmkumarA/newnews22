import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit{
constructor(private api:ServiceService){}
EntertainData:any=[];
ngOnInit(): void {
  this.api.enterNews().subscribe((result)=>{
    console.log(result.articles);
    this.EntertainData=result.articles;
  })
}


}
