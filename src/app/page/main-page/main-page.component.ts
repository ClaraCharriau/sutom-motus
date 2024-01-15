import { Component } from '@angular/core';
import { UserService } from '../../service/user-service/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  isUserLogged: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isLogged();
  }

  isLogged(): void {
    this.isUserLogged = this.userService.isUserLogged();
  }

  startGame(): void {
    this.ngOnInit();
  }
}
