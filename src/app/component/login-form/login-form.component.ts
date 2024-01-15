import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../service/user-service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Output() newUserEvent = new EventEmitter();

  constructor(private userService: UserService) {}

  startGame(nameInput: any): void {
    if(nameInput && nameInput.value.length > 0) {
      this.logUser(nameInput.value);
      this.newUserEvent.emit(nameInput)
    }
  }

  logUser(nameInput: string): void {
    this.userService.createUser(nameInput.trim());
  }
}
