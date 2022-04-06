import { Component, OnInit } from '@angular/core';
import { environmentService } from '../services/home.service';

@Component({
  selector: 'app-addenvironment',
  templateUrl: './addenvironment.component.html',
  styleUrls: ['./addenvironment.component.css']
})
export class AddenvironmentComponent{
  environments =[{title:''},{description:''},{location:''},];

  selectedenvironment;
  constructor(private envService: environmentService) { 
    this.selectedenvironment ={id: -1, title: '' , description: '', location: '' }
  }

  createenvironment = () => {
    this.envService.createenvironment(this.selectedenvironment).subscribe(
      data => {
        this.environments.push(data);
      },
     
    );
  }

}
