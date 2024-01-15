import { Injectable } from '@angular/core';
import { WordService } from '../word-service/word.service';
import { UserService } from '../user-service/user.service';

export interface GameLetter {
  value: string;
  isPresent: boolean;
  isInRightPlace: boolean;
}

export interface UserInput {
  round: number;
  input: GameLetter[];
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  secretWordLetters!: string[];
  emptyInput!: string[];
  round: number = 1;

  constructor(private wordService: WordService, private userService: UserService) { }

  startGame() {
    this.secretWordLetters = this.wordService.getSecretWordLetters();
    this.emptyInput = this.getEmptyInput();
  }

  submitInput(userInput: string[]) {
    const letterGameArray = this.toGameLetterArray(userInput);
    if(this.isRightWord(letterGameArray)) {
      // C'est gagné
      // Open modale gagné
      console.log("C'est gagné");
    } else if (this.round + 1 == 7) {
      // C'est perdu
      // Open modale perdu
    } else {
      this.userService.saveAttempt({
        round: this.round,
        input: letterGameArray
      })
      console.log("Essaie à nouveau");
      this.round++;
    }
  }

  toGameLetterArray(userInput: string[]): GameLetter[] {
    let userGameLetters = [];

    for(const [index, letter] of userInput.entries()) {
      userGameLetters.push({
        value: letter,
        isPresent: this.isPresentInSecretWord(letter),
        isInRightPlace: this.isInRightPlace(letter, index),
      } as GameLetter)
    }
    return userGameLetters;
  }

  getEmptyInput(): string[] {
    this.emptyInput = new Array(this.secretWordLetters.length).fill("");
    this.emptyInput[0] = this.secretWordLetters[0];
    return this.emptyInput;
  }

  private isPresentInSecretWord(letter: string): boolean {
    return this.secretWordLetters.includes(letter);
  }

  private isInRightPlace(letter: string, index: number): boolean {
    return this.secretWordLetters[index] === letter;
  }

  private isRightWord(tableau: GameLetter[]): boolean {
      return tableau.every(letter => letter.isInRightPlace === true);  
  }
}
