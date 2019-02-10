import { Component } from '@angular/core'; 

@Component({
  selector: 'my-app',
  templateUrl: './app.components.html'
})
export class AppComponent   { 
  onDeactivate(){
    document.body.scrollTop =0;
    window.scrollTo(0,0);
  }
}

