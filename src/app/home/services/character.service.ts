import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharacterResp, Result } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  // listCharacters(name: string): Observable<any> {
  //   const url = `${environment.API}`
  // }

  listCharacters(): Observable<CharacterResp> {
    const url = `${environment.API}/character/`;
    return this.http.get<CharacterResp>(url);
  }
}
