import { Pipe, PipeTransform, Component ,OnInit, OnChanges,Input} from '@angular/core';

import { Media } from './shared/media';
import { MediaService } from './shared/media.service';
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
export class MediaComponent implements OnChanges {
  title ='Recent Photos';
  @Input() filterBy?:string ='all'
  visibleMedias : any[] = [];
 name:string;
  constructor(private MediaService: MediaService){
  this.visibleMedias = this.MediaService.getMedias() ;
  this.name = 'Angular2 (Release Candidate!)'

  }

ngOnChanges(){
 this.visibleMedias =this.MediaService.getMedias();
}
 

}


