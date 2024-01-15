import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { HeaderComponent } from './component/header/header.component';
import { GameBoardComponent } from './component/game-board/game-board.component';
import { KeyboardComponent } from './component/keyboard/keyboard.component';
import { InstructionsModaleComponent } from './component/instructions-modale/instructions-modale.component';
import { ResultModaleComponent } from './component/result-modale/result-modale.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MainPageComponent,
    HeaderComponent,
    GameBoardComponent,
    KeyboardComponent,
    InstructionsModaleComponent,
    ResultModaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
