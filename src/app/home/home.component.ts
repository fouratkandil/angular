import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { environmentService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
 

  /*selectedenvironment;*/
  enviro:any
  
  constructor(private envService: environmentService )  {
    /*this.getenv();
    this.selectedenvironment ={ id: -1 , title: '' , description: '', location: '' }*/
    }
   
   ngOnInit():void{
     this.envService.getAll().subscribe(
      (data) =>{
        this.enviro =data;
        })
   }


 deleteenvironment (id :any) {
  this.envService.deleteenvironment(id).subscribe(()=> {
      this.enviro=this.enviro.filter((u:any)=> u!==id);
    })}
  
}