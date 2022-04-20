import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddenvironmentComponent } from '../addenvironment/addenvironment.component';
import { brokerService } from '../services/broker.service';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent implements OnInit {

  brokers:any
  broker =[{name:''},{server:''},{port:''},];

  selectedbroker;
  constructor(private brokerService: brokerService ,public dialogRef: MatDialogRef<AddenvironmentComponent>) { 
   
    this.selectedbroker ={id: -1, name: '' , server: '', port: '' }
  
    
  }
 
  createbroker = () => {
    this.brokerService.createbroker(this.selectedbroker).subscribe(
      data => {
        this.broker.push(data);
      },
     
    );
   
    
  }
  onClose() {
 
    this.dialogRef.close() ;
  }
  ngOnInit(): void {
    this.brokerService.getAll().subscribe(
      (data) =>{
       
        this.brokers =data;
      
        })
        
  }
  deletebroker (id :any) {
    this.brokerService.deletebroker(id).subscribe(()=> {
        this.brokers=this.brokers.filter((u:any)=> u!==id);
      })}
}


