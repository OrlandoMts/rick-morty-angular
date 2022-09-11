import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() character: Result = {};

  constructor() { }

  ngOnInit(): void {
  }

}
