import { Component, OnDestroy, OnInit } from '@angular/core';
import { map} from 'rxjs';
import { Result } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styles: [
  ]
})
export class ListCharactersComponent implements OnInit, OnDestroy {

  public characters!: Result[];

  public suggestions: boolean = false;
  public suggestionsCharacter: Result[] = [];
  public characterResp: boolean = true;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  public observable$ = this.characterService.listCharacters().pipe(
    map(data => data.results)
  );

  public subs = this.observable$.subscribe({
    next: (resp) => this.characters = resp
  });

  // Manejador de sugerencias
  lookCharacter(value: string) {
    this.suggestions = true;
    this.characterService.lookCharacters(value).pipe(
        map( ({results}) => results),
      ).subscribe({
        next: characters => {
          this.suggestionsCharacter = characters?.splice(0,10);
          this.characterResp = true;
        },
        error: error => {
          console.error(error),
          this.characterResp = false;
          this.suggestionsCharacter = [];
        }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

}
