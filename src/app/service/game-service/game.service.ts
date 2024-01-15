import { Injectable } from '@angular/core';
import { WordService } from '../word-service/word.service';

export interface GameLetter {
  value: string;
  isPresent: boolean;
  isInRightPlace: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  secretWordLetters!: string[];

  constructor(private wordService: WordService) { }

  startGame() {
    this.secretWordLetters = this.wordService.getSecretWordLetters();
  }

  toGameLetterArray(input: string): GameLetter[] {
    let userGameLetters = [];

    const userInputLetters = this.wordService.wordToLetterArray(input);
    for(const [index, letter] of userInputLetters.entries()) {
      userGameLetters.push({
        value: letter,
        isPresent: this.isPresentInSecretWord(letter),
        isInRightPlace: this.isInRightPlace(letter, index),
      } as GameLetter)
    }
    return userGameLetters;
  }

  private isPresentInSecretWord(letter: string): boolean {
    return this.secretWordLetters.includes(letter);
  }

  private isInRightPlace(letter: string, index: number): boolean {
    return this.secretWordLetters[index] === letter;
  }
}
