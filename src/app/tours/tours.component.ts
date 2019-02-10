import { Component, OnChanges,Input,OnInit} from '@angular/core';
import {TourService} from './shared/tour.service';
import { Tours } from './shared/tour';
@Component({
    selector: 'tour-component',
    templateUrl: './tours.component.html',
    styleUrls:['./tours.component.css'],

})
export class ToursComponent implements OnChanges, OnInit { 
    searchTour='';
  @Input() filterBy?:string ='all'
    visibleTours : any[] = [];
    
    car:Car = new Car();
    colours = Array<Colour>();
    name:string;
    constructor(private TourService: TourService){
    this.visibleTours = this.TourService.getTours() ;
    this.name = 'Angular2 (Release Candidate!)'

    }
ngOnChanges(){
   this.visibleTours =this.TourService.getTours();
}
   
  
  
    ngOnInit(): void {
  
          this.colours = Array<Colour>();
          this.colours.push(new Colour(-1, 'Please select'));
          this.colours.push(new Colour(1, 'Green'));
          this.colours.push(new Colour(2, 'Pink'));
          
          this.car = new Car();
          this.car.colour = this.colours[1];        
      }
  }
  
  export class Car
  {
      colour:Colour;
  }
  
  export class Colour
  {
      constructor(id:number, name:string) {
          this.id=id;
          this.name=name;
      }
  
      id:number;
      name:string;
  }
  