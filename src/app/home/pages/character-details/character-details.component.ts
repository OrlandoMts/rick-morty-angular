import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { asyncScheduler, Subscription, switchMap, tap } from 'rxjs';
import { Result } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styles: [
  ]
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {


  public character!: any; // Lo hice asi para poder mostrar el loader
  public subs!: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.subs = asyncScheduler.schedule( () => {
      this.activatedRoute.params.pipe(
        switchMap( ({id}) => this.characterService.characterById(Number(id))),
        tap( (data)=> console.log(data))
      ).subscribe({
        next: (res) => this.character = res,
        error: console.log
      })
    }, 700)

  }

  backHome() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}


// public subs2 = asyncScheduler.schedule(() => {
  //   this.observable$.subscribe({
  //     next: (resp) => this.characters = resp
  //   });
  // }, 2000)
