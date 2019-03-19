import { Component , OnInit} from '@angular/core';
import { TourService } from './shared/tour.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'tour-details-component',
    templateUrl: './tour-details.component.html',
    styleUrls:['./tour-details.component.css']
})
   export class TourDetailComponent {
        tour: any;
        visibleTours : any[] = [];

        constructor(public db: AngularFireDatabase,private tourService: TourService, private route:ActivatedRoute){
this.getTour(
  + this.route.snapshot.params['id']
 );

        }
    
    getTour(id:number){
        return  this.db.list('/tours').valueChanges()
          .subscribe((data) =>{
            this.visibleTours = data;
            this.tour = this.visibleTours.filter(tour => tour.id==id)[0];
            console.log(this.tour);
          });
       }
  
  
      }
