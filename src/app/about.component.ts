import { Pipe, PipeTransform, Component , OnChanges,Input} from '@angular/core';
import { ImageService } from './images/shared/image.service';
import {TourService} from './tours/shared/tour.service';
import {MediaService} from './media/shared/media.service';
import {NewService} from './news/shared/news.service';
import {MusicService} from './music/shared/music.service';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

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
  constructor(private MusicService: MusicService,private NewService: NewService, private MediaService: MediaService,private ImageService: ImageService,private TourService: TourService){
    
    this.visibleTours = this.TourService.getTours() ;
    this.visibleMedias = this.MediaService.getMedias() ;
    this.visibleNews = this.NewService.getNews() ;
    this.visibleImages = this.ImageService.getImages() ;
    this.visibleMusic= this.MusicService.getMusics() ;
  }

  
   }
