import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styles: [
  ]
})
export class CharacterDetailsComponent implements OnInit {


  public character = {}
  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.characterService.characterById(Number(id))),
      tap( (data)=> console.log(data))
    ).subscribe({
      next: (res) => this.character = res,
      error: console.log
    })

  }

  backHome() {
    this.router.navigate(['/home']);
  }

}


// public subs2 = asyncScheduler.schedule(() => {
  //   this.observable$.subscribe({
  //     next: (resp) => this.characters = resp
  //   });
  // }, 2000)
