import { Component, OnChanges,Input} from '@angular/core';
import { NewService } from '../news/shared/news.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'news-component',
  templateUrl: './news.component.html'
})

export class NewsComponent  { 
   
     title ='Recent Photos';
     @Input() filterBy?:string ='all'
     visibleNews : any[] = [];

     constructor(public db: AngularFireDatabase){
        this.getNews();
  
    }
  
    getNews(){
        return  this.db.list('/news').valueChanges()
          .subscribe((data) =>{
            this.visibleNews = data;
          });
       }

    }