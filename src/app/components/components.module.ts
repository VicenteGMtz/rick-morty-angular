import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardsCharactersComponent } from './cards-characters/cards-characters.component';
import { InfoCharactersComponent } from './info-characters/info-characters.component';






@NgModule({
  declarations: [
    InfoCharactersComponent,
    CardsCharactersComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    InfoCharactersComponent,
    CardsCharactersComponent
  ]
})
export class ComponentsModule { }
