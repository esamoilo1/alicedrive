import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {
  
  visible: boolean;
  clickNav: boolean;
  constructor() {
    this.visible = false;
  
    }
    makeVisible(visibleCheck:boolean){
      if(this.visible == false){
      this.visible = true;
    }
      else if(this.visible){
        this.visible = false;
      }
      console.log(this.visible);
      console.log(this.clickNav);

    }
}
