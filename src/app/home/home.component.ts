import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SharedService } from '../services/shared.service';
import { environmentService } from 'src/app/services/home.service';

import { MatDialog, MatDialogConfig } from  '@angular/material/dialog';
import { AddenvironmentComponent } from '../addenvironment/addenvironment.component';

@Component({
  selector: 'app-home',
 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
 

  /*selectedenvironment;*/
  enviro:any
  dev :any
  constructor(private envService: environmentService, private  dialogRef : MatDialog ,private sharedService: SharedService)  {
    
    }
   
  
    openDialog(){
     
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "50%";
      this.dialogRef.open(AddenvironmentComponent,dialogConfig);
     
    }
   
   ngOnInit():void{
   
     
     this.envService.getAll().subscribe(
      (data) =>{
       
        this.enviro =data;
      
        })

   }
 sendid(id:any){ this.sharedService.setmessage(id)}

 deleteenvironment (id :any) {
  this.envService.deleteenvironment(id).subscribe(()=> {
      this.enviro=this.enviro.filter((u:any)=> u!==id);
    })}


  


      
}