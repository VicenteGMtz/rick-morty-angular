import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ViewsModule } from './views/views.module';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, 
        BrowserAnimationsModule, 
        ViewsModule, 
        AppRoutingModule,
        MatGridListModule, 
        ComponentsModule,
        HttpClientModule],
    providers: [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}  
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
