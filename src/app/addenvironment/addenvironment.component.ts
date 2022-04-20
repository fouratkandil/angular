import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environmentService } from '../services/home.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-addenvironment',
  templateUrl: './addenvironment.component.html',
  styleUrls: ['./addenvironment.component.css']
})


export class AddenvironmentComponent{
  environments =[{title:''},{description:''},{location:''},];

  selectedenvironment;
  constructor(private envService: environmentService ,public dialogRef: MatDialogRef<AddenvironmentComponent>) { 
   
    this.selectedenvironment ={id: -1, title: '' , description: '', location: '' }
  
    
  }
 
  createenvironment = () => {
    this.envService.createenvironment(this.selectedenvironment).subscribe(
      data => {
        this.environments.push(data);
      },
     
    );
   
    
  }
  onClose() {
 
    this.dialogRef.close() ;
  }
  /*messagesubmit(){ this.notificationService.success(':: Submitted successfully');}*/
  
}
