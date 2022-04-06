import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { environmentService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  /*environments: any;
  currentenvironment = null;
  currentIndex = -1;
  title = '';*/

  selectedenvironment;

  environments =[{title:''},{description:''},{location:''},];
  constructor(private envService: environmentService ) {
    this.getenv();
    this.selectedenvironment ={id:0 , title: '' , description: '', location: '' }
      
   }
getenv = ()=>{
  this.envService.getAll().subscribe(
    data =>{
      this.environments =data;
    }
  )
 

}

 deleteenvironment = () => {
  this.envService.deleteenvironment(this.selectedenvironment.id).subscribe(
    data => {
      this.getenv();
    },
    
  );
}
  /*ngOnInit() {
    
  }
  retrieveenvironment() {
    this.envService.getAll().subscribe(
      data => {this.environments=data;},
        );
  }
  refreshList() {
    this.retrieveenvironment();
    this.currentenvironment = null;
    this.currentIndex = -1;
  }
  
  setActiveTutorial(environment: any, index: number) {
    this.currentenvironment = environment;
    this.currentIndex = index;
  }
 */
}






/*cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
  ];*/
