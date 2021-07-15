import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, RickAndMorty } from 'src/app/interfaces/rick-and-morty/character';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private endpoint = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  public async getAllCharacters(): Promise<Character[]> {
    const apiURL = `${this.endpoint}/character`;

    const response = await this.http.get<RickAndMorty>(apiURL).toPromise();

    return response.results;
  }

}
