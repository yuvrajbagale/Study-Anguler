import { Component, OnInit } from '@angular/core';
import { UserComponent } from "../user/user.component";
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-users',
  // selector: '.app-users',
  standalone: true,
  imports: [UserComponent, FormsModule, CommonModule, NgIf],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  allowNewUser = false;
  // userCreatedStatus = 'No User is Created';
  userName = 'Test User';
  isUserCreated = false;
  // users = ['user1', 'user2'];
  users: string[] = [];



  constructor() { 
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  changeUserCreatedStatus(){
    this.isUserCreated = true;
    // this.userCreatedStatus = 'User is Created';
    this.users.push(this.userName)
  }

  onUpdateUser(event: Event){
    this.userName = (event.target as HTMLInputElement).value;

  }

  ngOnInit(): void {
      
  }
}
