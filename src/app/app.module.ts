import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Input }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { CommentService } from './comment/comment.service';
import { CommentComponent } from './comment/comment.component';
import { HttpModule } from '@angular/http';

import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ImageFilterPipe }  from './images/shared/filter.pipe';
import { ReversePipe }  from './comment/reverse.pipe';
import { MediaFilterPipe }  from './media/shared/filter.pipe';
import { TourFilterPipe }  from './tours/shared/filter.pipe';
import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { HeaderComponent }  from './header/header.component';
import { BannerComponent }  from './banner/banner.component';
import { FooterComponent }  from './footer/footer.component';
import { ImageDetailComponent }  from './images/image-detail.component';
import { GalleryComponent }  from './gallery/gallery.component';
import { MediaComponent }  from './media/media.component';
import { MusicComponent }  from './music/music.component';
import { NewsComponent }  from './news/news.component';
import { BandComponent } from './band/band.component';
import { ToursComponent } from './tours/tours.component';
import { TourDetailComponent } from './tours/tour-details.component';
import { ImageService }  from './images/shared/image.service';
import { MusicService }  from './music/shared/music.service';
import {SafePipe} from './media/media.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { MediaService }  from './media/shared/media.service';

import { NewService } from './news/shared/news.service';
import { TourService } from './tours/shared/tour.service';
import { SalesComponent } from './sales/sales.component';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/about', pathMatch: 'full' },

    { path: 'about', component: AboutComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'image/:id', component: ImageDetailComponent },
    { path: 'tour/:id', component: TourDetailComponent },
    { path: 'news',       component: NewsComponent },
    { path: 'media',      component: MediaComponent },
    { path: 'music',      component: MusicComponent },
    { path: 'tours',      component: ToursComponent },

];


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports:      [
    HttpClientModule, 
     BrowserModule,
     HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
     FormsModule,
 ],
  declarations: [ AppComponent ,
    SafePipe,
    CommentComponent,
     HeaderComponent,
     BannerComponent,
     FooterComponent,
     GalleryComponent,
     AboutComponent,
     ImageDetailComponent,
     NewsComponent,
    ReversePipe,
     ImageFilterPipe,
     MediaFilterPipe,
     TourFilterPipe,
     MusicComponent,
     MediaComponent,
    BandComponent,
  ToursComponent,
  TourDetailComponent,
  SalesComponent,
  FilterPipe,
   ],
 providers: [ ImageService,CommentService,NewService,MediaService,TourService,ReversePipe,ImageFilterPipe,TourFilterPipe,MediaFilterPipe,MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }



