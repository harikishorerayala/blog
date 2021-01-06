import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //property
  title = 'blog';
  //function
  getTitle(){
    return this.title;
  }
  //object
  obj={
    name:"Hari",
    age:"35"
  };
  //array
  arr=["hari","kishore","rayala"];

  objWindow=window;
}
