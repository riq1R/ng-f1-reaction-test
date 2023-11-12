import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-f1-reaction-test';
  name = "";


  showButton = true;
  drive: boolean = false;
  showTimeTrying = false;
  showLeaderboard = false;

  timeStart: number = 0;
  finaltime: number = 0;


  timeArray: { name: string, time: number }[] = [];

  array: string[] = [
    "light-strip", "light-strip", "light-strip", "light-strip", "light-strip",];

  start() {
    this.showButton = false;
    this.array[0] = "light-strip on"

    let index = 1;

    let interval = setInterval(() => {
      this.array[index] = "light-strip on"
      index++;
      if (index == 6) {
        clearInterval(interval);
        this.phase2()
      }
    }, 1000)


  }


  phase2() {
    //setTimeout(() => 500)
    let max = 4;
    let min = 1;
    setTimeout(() => (Math.random() * (max - min + 1) + min) * 1000)
    this.array = ["light-strip", "light-strip", "light-strip", "light-strip", "light-strip",];
    this.showTimeTrying = true;
    this.drive = true;
    this.timeStart = Date.now();
  }


  endDrive() {
    this.drive = false;
    this.finaltime =  Date.now() - this.timeStart;
    this.timeArray.push({name: this.name, time: this.finaltime});
    this.timeArray.sort((a, b) => {
      return a.time - b.time;
    })
    this.showLeaderboard = true;
  }

  restartDrive() {
    this.showButton = true;
    this.drive = false;
    this.showTimeTrying = false;
    this.showLeaderboard = false;
    this.finaltime = 0;
    this.timeStart = 0;
  }


}
