import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-f1-reaction-test';
  switch: boolean = false;

  start() {
    this.switch = true;

  }
}
