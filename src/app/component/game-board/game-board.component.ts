import { Component, Input } from '@angular/core';
import { WordService } from '../../service/word-service/word.service';
import { GameService } from '../../service/game-service/game.service';
import { User, UserService } from '../../service/user-service/user.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {
  @Input() userInput!: string[];
  @Input() user!: User;
  secretWord?: string[];

  constructor(private gameService: GameService, private userService: UserService, private wordService: WordService) {}

  ngOnInit(): void {
    this.gameService.startGame();
    this.initUserInput();
    this.getUser();
    this.secretWord = this.wordService.getSecretWordLetters();
  }
    
  initUserInput() {
    this.userInput = this.gameService.getEmptyInput();
  }

  getUser() {
    const user = this.userService.getUser();
    if(user !== null) {
      this.user = user;
    }
  }

  replaceLetter(currentInput: string[], letter: string): string[] {
    for (let i = 1; i < currentInput.length; i++) {
      currentInput[i] = letter;
      break;
    }
    return currentInput;
  }

  getRemainingRound() {
    const remainingAttempts = 5 - this.user.attempts.length;
    return Array(remainingAttempts).fill('');
  }
  }

