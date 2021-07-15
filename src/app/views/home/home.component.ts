import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/rick-and-morty/character';
import { RickAndMortyService } from 'src/app/services/rick-and-morty/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dataRickAndMorty: Character[] = [];

  constructor(private rickAndMortyService: RickAndMortyService ) { }

  async ngOnInit(): Promise<void> {
    this.dataRickAndMorty = await this.rickAndMortyService.getAllCharacters();
  }

}
