import { Component, EventEmitter, Output } from '@angular/core';
import { GameService } from '../../service/game-service/game.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {
  @Output() newUserSubmission = new EventEmitter();

  constructor(private gameService: GameService) {}

  keyboard: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  pressedKeys: string[] = [];
  count: number = 1;

  ngOnInit() {
    this.pressedKeys = this.gameService.getEmptyInput();
    this.newUserSubmission.emit(this.pressedKeys);
  }

  addKey(key: string) {
    this.buildInput(key);
    this.newUserSubmission.emit(this.pressedKeys);
  }

  buildInput(key: string) {
    // Stop building input if the secret word length is reached
    if(this.count >= this.gameService.secretWordLetters.length) {
      return;
    }
    this.pressedKeys[this.count] = key;
    this.count++;
  }

  clear() {
    this.pressedKeys = this.gameService.getEmptyInput();
    this.count = 1;
    this.newUserSubmission.emit(this.pressedKeys);
  }

  submit() {
    console.log("je tente le mot : " + this.pressedKeys);
    this.gameService.submitInput(this.pressedKeys);
  }
}
