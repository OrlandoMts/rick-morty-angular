import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { ListCharactersComponent } from './pages/list-characters/list-characters.component';

const routes: Routes = [{
  path: '',
  children:[
    {path: 'list-characters', component: ListCharactersComponent},
    {path: 'character-details/:id', component: CharacterDetailsComponent},
    {path: '**', redirectTo: 'list-characters'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
