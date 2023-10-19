//this is the most important file in the component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  getName(name : string){
    alert("Function " + name);
  }
  getConsole(){
    console.warn("Hey This is testing");
  }
  getData(val: any){
    console.log(val);
  }
}
