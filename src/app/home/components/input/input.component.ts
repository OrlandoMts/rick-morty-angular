import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit, OnDestroy {

  @ViewChild('inputSearch') input!: '';
  @Output() onInputValue: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public input$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    debounceTime(500),
    map( ({target}) => (target as HTMLInputElement).value),
    filter( value => value?.trim() !== ""),
    distinctUntilChanged()
    );

  public subsciption = this.input$.subscribe({
    next: (value) => this.onInputValue.emit(value)
  });

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }

}
