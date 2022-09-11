import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListCharactersComponent } from './pages/list-characters/list-characters.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListCharactersComponent,
    CharacterDetailsComponent,
    InputComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
