import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'like-task';
  post ={
    msg!:"lorem ipsum",
    likecounts!:123,
  islike!:true,
  }
}
