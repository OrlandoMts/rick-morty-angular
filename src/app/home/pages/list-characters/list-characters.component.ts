import { Component, OnDestroy, OnInit } from '@angular/core';
import { asyncScheduler, debounceTime, map, tap } from 'rxjs';
import { Result } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styles: [
  ]
})
export class ListCharactersComponent implements OnInit {

  public characters!: Result[];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  public observable$ = this.characterService.listCharacters().pipe(
    map(data => data.results)
  );

  // public subs = this.observable$.subscribe({
  //   next: (resp) => this.characters = resp
  // });

  public subs2 = asyncScheduler.schedule(() => {
    this.observable$.subscribe({
      next: (resp) => this.characters = resp
    });
  }, 2000)
  lookCharacter(value: string) {
    console.log(value);
  }

  // ngOnDestroy(): void {
  //   this.subs.unsubscribe()
  // }

}
