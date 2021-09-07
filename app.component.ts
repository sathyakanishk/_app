import { Component,OnInit  } from '@angular/core';
import { ApplicationService } from './application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  userData: any[] = [];
  userList1: any;
  userList2: any;

  lastkeydown1: number = 0;
  subscription: any;
  title = 'TTS Self Portal Application';


  constructor(private applicationService: ApplicationService) {
    //Get the user data from users.json
    this.applicationService.getUserList().subscribe(
      data => {
        Object.assign(this.userData, data);
      },
      error => {
        console.log("Something wrong here");
      });    
  }  

  ngOnInit(): void {    
    console.log('ngOnInit')
  }


  getUserIdsFirstWay($event:any) {
    let userId = (<HTMLInputElement>document.getElementById('userIdFirstWay')).value;
    this.userList1 = [];
    
    if (userId.length > 1) {
      if ($event.timeStamp - this.lastkeydown1 > 200) {
        this.userList1 = this.searchFromArray(this.userData, userId);
      }
    }
  }
  
  searchFromArray(arr:any, regex:any) {
    let matches = [], i;    
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(regex)) {
        matches.push(arr[i]);
      }
    }
    return matches;
  };

}
