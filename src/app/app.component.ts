import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UsersComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'Yuvraj';
}
