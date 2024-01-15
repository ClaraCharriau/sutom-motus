import { Component, Input } from '@angular/core';
import { WordService } from '../../service/word-service/word.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {

  secretWordLetters!: string[];
  @Input() userInput?: string[];

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.secretWordLetters = this.wordService.getSecretWordLetters();
  }
}
