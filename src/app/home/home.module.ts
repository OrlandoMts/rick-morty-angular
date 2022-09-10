import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListCharactersComponent } from './pages/list-characters/list-characters.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';


@NgModule({
  declarations: [
    ListCharactersComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
