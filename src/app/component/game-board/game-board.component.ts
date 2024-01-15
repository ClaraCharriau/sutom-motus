import { Component, Input } from '@angular/core';
import { WordService } from '../../service/word-service/word.service';
import { GameService } from '../../service/game-service/game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {

  @Input() userInput!: string[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.startGame();
    this.initUserInput();
  }

  initUserInput() {
    this.userInput = this.gameService.getEmptyInput();
  }

  replaceLetter(currentInput: string[], letter: string): string[] {
    for (let i = 1; i < currentInput.length; i++) {
      currentInput[i] = letter;
      break;
    }
    return currentInput;
  }
}
