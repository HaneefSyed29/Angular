//this is the most important file in the component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  displayValue: string = '';
  show: boolean = true;
  valuee: boolean = true;
  userdata: any = {};
  color: string = "green";
  users= ['haneef', 'sahil', 'fazal', 'sanket', 'harshal'];
  usersDetails =[
    {username: 'haneef', roll:'1'},
    {username:'sahil', roll:'2'},
    {username: 'fazal', roll:'3'}
  ];
  meranumber: number = 0;
  getName(name : string){
    alert("Function " + name);
  }
  getConsole(){
    console.warn("Hey This is testing");
  }
  getData(val: any){
    console.log(val);
  }
  getValue(val: string){
    this.displayValue = val;
    console.warn(val);
  }
  decrease(){
     this.meranumber--;
  }
  increase(){
    this.meranumber++;
  }
  getData1(data: any){
    console.warn(data);
    this.userdata = data;
  }
  changeShow(todo: boolean){
    this.show = !todo;
  }
}
