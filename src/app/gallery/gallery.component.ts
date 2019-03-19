import { Component, Input} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'gallery-component',
    templateUrl: './gallery.component.html',
    styleUrls:['./gallery.component.css']
})
export class GalleryComponent  { 
   
     title ='Recent Photos';
     @Input() filterBy?:string ='all'
     visibleImages : any[] = [];
     constructor(public db: AngularFireDatabase){
        this.getGalerry();

    }

    getGalerry(){
        return  this.db.list('/images').valueChanges()
          .subscribe((data) =>{
            this.visibleImages = data;
          });
       }


    }

