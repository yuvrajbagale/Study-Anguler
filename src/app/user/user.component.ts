import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  // styleUrl: './user.component.css'
  styles: [

    `
    .offline {
      color: white;
    }
    
    `
  ]
})
export class UserComponent {
[x: string]: any;
  allowedNewUsers: boolean = false;
  userID: number = 10;
  userStatus: string = "offline";
  backgroundColor: string = "red";
  userName: any;

  constructor(){
// setTimeout(() => {
//   this.allowedNewUsers = true;
// }, 3000);

this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';

}
  
  getColor(){
    if(this.userStatus === 'online') {
      return 'green';
    }
    return "red";
  }

  ngOnInit(): void {}
}
