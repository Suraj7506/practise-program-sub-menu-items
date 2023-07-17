import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  constructor( public dataService: SharedService, private router: Router ){

  }
  parentMessage = 'Hello from parent';

  handleData(data: string) {
    console.log('Received data in parent:', data);
  }

  senddatatoparent(){
    this.dataService.secondData = 'hello this is from parent componet'
  }

  navigate(){
    const data = 'Data from parent'
    this.router.navigate(['/child',{data}])
  }

}
