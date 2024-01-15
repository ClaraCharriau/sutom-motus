import { Component, Input } from '@angular/core';
import { UserService } from '../../service/user-service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() username!: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.username = this.userService.username;
  }

}
