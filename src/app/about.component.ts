import { Pipe, PipeTransform, Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
import { AngularFireDatabase } from 'angularfire2/database';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'about-component',
  templateUrl: './about.component.html'
})
export class AboutComponent  { 
  visibleTours : any[] = [];
  visibleImages : any[] = [];
  visibleMedias : any[] = [];
  visibleNews : any[] = [];
  visibleMusic : any[] = [];
  constructor(public db: AngularFireDatabase){
    this.getNews();
    this.getTours();
    this.getMedia();
    this.getMusic();
    this.getGalerry();
    this.getGalerry();


  }
  getTours(){
    return  this.db.list('/tours').valueChanges()
      .subscribe((data) =>{
        this.visibleTours = data;
      });
   }
   getMedia(){
    return  this.db.list('/movies').valueChanges()
      .subscribe((data) =>{
        this.visibleMedias = data;
      });
   }
   getGalerry(){
    return  this.db.list('/images').valueChanges()
      .subscribe((data) =>{
        this.visibleImages = data;
      });
   }
   getMusic(){
    return  this.db.list('/music').valueChanges()
      .subscribe((data) =>{
        this.visibleMusic = data;
      });
   }
   getNews(){
    return  this.db.list('/news').valueChanges()
      .subscribe((data) =>{
        this.visibleNews = data;
      });
   }
  
   }
