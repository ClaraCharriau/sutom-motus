import { Component } from '@angular/core';
import { UserService } from '../../service/user-service/user.service';
import { GameService } from '../../service/game-service/game.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  isUserLogged: boolean = false;
  input: string[] = [];

  constructor(private userService: UserService, private gameService: GameService) {}

  ngOnInit(): void {
    this.isLogged();
  }

  isLogged(): void {
    this.isUserLogged = this.userService.isUserLogged();
  }

  startGame(): void {
    this.ngOnInit();
    this.gameService.startGame();
  }

  getInput(keyboardInput: string[]): void {
    this.input = keyboardInput;
  }
}
