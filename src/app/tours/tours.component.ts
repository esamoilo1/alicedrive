import { Component, OnChanges,Input,OnInit} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'tour-component',
    templateUrl: './tours.component.html',
    styleUrls:['./tours.component.css'],

})
export class ToursComponent  { 
    searchTour='';
  @Input() filterBy?:string ='all'
    visibleTours : any[] = [];

    name:string;
    constructor(public db: AngularFireDatabase){
        this.getTours();
        console.log(this.visibleTours);

    }

getTours(){
    return  this.db.list('/tours').valueChanges()
      .subscribe((data) =>{
        this.visibleTours = data;
        console.log(this.visibleTours);

      });
   }
   
 
  
}
  








