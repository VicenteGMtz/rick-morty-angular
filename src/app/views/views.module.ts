import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [HomeComponent, PageNotFoundComponent],
    imports: [CommonModule, ComponentsModule]
})
export class ViewsModule {}
