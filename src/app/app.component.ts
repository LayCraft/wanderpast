import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wanderpast';
  demoAlert() {
    alert('You clicked a button. Do you want a medal or something?');
  }
}
