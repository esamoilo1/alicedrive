import { Pipe, PipeTransform, Component ,Input} from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

//our root app component
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'media-component',
  templateUrl: './media.component.html'
})
export class MediaComponent {
  title ='Recent Photos';
  @Input() filterBy?:string ='all'
  visibleMedias : any[] = [];
 name:string;
 constructor(public db: AngularFireDatabase){
  this.getMedia();

}

getMedia(){
  return  this.db.list('/movies').valueChanges()
    .subscribe((data) =>{
      this.visibleMedias = data;
    });
 }

 

}


