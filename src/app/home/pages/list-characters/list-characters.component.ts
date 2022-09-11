import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Result } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styles: [
  ]
})
export class ListCharactersComponent implements OnInit {

  public characters: Result[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.listCharacters().pipe(
      map(data => data.results)
    ).subscribe({
      next: (resp) => {console.log(resp);this.characters = resp}
    });
  }

  lookCharacter(value: string) {
    console.log(value);
  }



}
