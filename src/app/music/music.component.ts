

import { Component, OnChanges} from '@angular/core';
import { Music } from './shared/music';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'music-component',
  templateUrl: './music.component.html'
})
export class MusicComponent { 
    music: Music[];
    selectedText:string;
    selectedMusic: Music;
    itemclass :void;

     visibleMusic : any[] = [];
     constructor(public db: AngularFireDatabase){
      this.getMusic();

  }

  getMusic(){
      return  this.db.list('/music').valueChanges()
        .subscribe((data) =>{
          this.visibleMusic = data;
        });
     }


   onSelect(music: Music,musicText:string): void {
        this.selectedMusic = music;
        this.selectedText = musicText;

      }
     
  }
