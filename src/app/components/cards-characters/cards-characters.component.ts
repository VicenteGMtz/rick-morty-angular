import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/interfaces/rick-and-morty/character';
import { InfoCharactersComponent } from '../info-characters/info-characters.component';

@Component({
  selector: 'app-cards-characters',
  templateUrl: './cards-characters.component.html',
  styleUrls: ['./cards-characters.component.scss']
})
export class CardsCharactersComponent implements OnInit {
  @Input() dataInput: Character[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(character: Character) {
    const dialogRef = this.dialog.open(InfoCharactersComponent, {
      width: '450px',
      data: character,
      backdropClass : 'red',
      hasBackdrop : true , //cerrar modal con el clik aguera del modal
      autoFocus : true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      // this.animal = result;
    });
    
  }

}
