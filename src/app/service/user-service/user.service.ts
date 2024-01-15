import { Injectable } from '@angular/core';
import { UserInput } from '../game-service/game.service';

export interface User {
  username: string;
  attempts: UserInput[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  isUserLogged() {
    if (this.getUser() !== null) {
      return true;
    }
    console.error('user is not logged');
    return false;
  }

  getUser(): User | null {
    const user = localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

  createUser(username: string): void {
      const newUser = JSON.stringify({
        username: username,
        attempts: [],
      });
      localStorage.setItem('user', newUser);
  }

  saveAttempt(newAttempt: UserInput): void {
    const user = this.getUser();
    if (user != null) {
      const newUser = JSON.stringify({
        username: user.username,
        attempts: [...user.attempts, newAttempt],
      });
      localStorage.setItem('user', newUser);
    }
  }
}
