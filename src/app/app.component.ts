import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  mostarContent:boolean;

  constructor(){
    this.mostarContent =false
  }

  hacerSwitch(){
    this.mostarContent ? this.mostarContent = false: this.mostarContent = true;

  }
}
