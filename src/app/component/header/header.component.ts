import { Component, Input } from '@angular/core';
import { UserService } from '../../service/user-service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private userService: UserService) {}

  username!: string;

  ngOnInit() {
    this.username = this.getUsername();
  }

  getUsername(): string {
    const user = this.userService.getUser();
    if(user !== null) {
      return user.username;
    }
    return "error"
  }

}
