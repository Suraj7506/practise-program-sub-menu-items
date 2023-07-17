import { CanActivate } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myprograms';
  CopyText = 'hello';

  dateToday!: string;
  myObservable: any

  name!: string;

  constructor() { }

  ngOnInit(): void {

    this.dateToday = new Date().toDateString();
    this.name = "Simplelearn";
    this.myObservable = of('Some text').pipe(delay(3000))

  } 

 hello = [
  {
    'name': "suraj",
    'age': "13"
  }
 ]

  mkom = true;
  variab = 10;
  num = 3;

  date = new Date(2022, 1, 1);

  message = 'Hello, Angular!';
  
 
  

}
