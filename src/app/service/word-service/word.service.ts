import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  secretWordLetters!: string[];

  constructor() {}

  getSecretWord() {
    return 'cookie';
  }

  getSecretWordLetters(): string[] {
    return this.wordToLetterArray(this.getSecretWord());
  }

  wordToLetterArray(word: string): string[] {
    return word.split('');
  }
}
