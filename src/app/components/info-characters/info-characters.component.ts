import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/interfaces/rick-and-morty/character';
import { CardsCharactersComponent } from '../cards-characters/cards-characters.component';


@Component({
  selector: 'app-info-characters',
  templateUrl: './info-characters.component.html',
  styleUrls: ['./info-characters.component.scss']
})
export class InfoCharactersComponent    {

  constructor(
    public dialogRef: MatDialogRef<CardsCharactersComponent>,
    @Inject(MAT_DIALOG_DATA) public character: Character) {
      console.log("character",character);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
