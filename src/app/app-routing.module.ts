import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AboutComponent } from './about.component';
import { ImageDetailComponent }  from './images/image-detail.component';
import { GalleryComponent }  from './gallery/gallery.component';
import { MediaComponent }  from './media/media.component';
import { NewsComponent }  from './news/news.component';
import { TourDetailComponent } from './tours/tour-details.component';
import {MusicComponent} from './music/music.component';
import {ToursComponent} from './tours/tours.component';

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
  imports: [
    RouterModule.forRoot(
      appRoutes  )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}



