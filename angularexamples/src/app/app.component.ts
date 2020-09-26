import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularexamples';
  name = 'DM121';
  myClass = 'myClass'
  showMessage: boolean = false;

  handleClick(){
    this.name = 'Click';
    this.showMessage = true;
  }

  onUpdate(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
  }
}
