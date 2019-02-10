import { Music } from './music';

import { MUSIC } from '../../../assets/img/mocks/mock-music';
import { Injectable} from '@angular/core';

@Injectable()
export class MusicService{
visibleMusic:any[];
itemclass = true;

 getMusics(){
     return this.visibleMusic=MUSIC.slice(0);
 }
 getMusic(id:number){
     return MUSIC.slice(0).find(music => music.id=== id)
 }


} 
