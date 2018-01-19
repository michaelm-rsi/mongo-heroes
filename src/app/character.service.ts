import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Character } from './character';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CharacterService {

  private apiUrl = "/api/characters";

  characters: Character[];

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
    // console.log('CALLED GET CHARACTERS');
    // var r = this.http.get(this.apiUrl).subscribe(result => {
    //   result['data'].forEach(r => {
    //     console.dir(r);
    //     var char = {
    //       name: r.name,
    //       id: r.id,
    //       description: r.description,
    //       alias: r.alias
    //     };
    //     this.characters.push(char);
    //   });
    // });

    //return r;
  }

}
