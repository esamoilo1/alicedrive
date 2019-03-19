import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'imagedetail-component',
  templateUrl: './image-detail.component.html',
  styleUrls:['./image-detail.component.css'],

})
export class ImageDetailComponent  {
  image: any;
  visibleImages : any[] = [];

  constructor(public db: AngularFireDatabase,private route:ActivatedRoute){
    this.getImage(
      + this.route.snapshot.params['id']
     );
    
            }
        
      getImage(id:number){
            return  this.db.list('/images').valueChanges()
              .subscribe((data) =>{
                this.visibleImages = data;
                this.image = this.visibleImages.filter(img => img.id==id)[0];
              });
           }
      
      
}