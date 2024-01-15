import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {
  @Output() newUserSubmission = new EventEmitter();

  keyboard: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  pressedKeys: string[] = [];

  addKey(key: string) {
    console.log(key);
    this.pressedKeys.push(key);
    this.newUserSubmission.emit(this.pressedKeys);
  }

  clear() {
    this.pressedKeys = [];
    this.newUserSubmission.emit(this.pressedKeys);
  }

  submit() {
    console.log("je tente le mot : " + this.pressedKeys);
  }
}
