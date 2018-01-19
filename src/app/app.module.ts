import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';

import { CharacterService } from './character.service';
import { TraitPipe } from './trait.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    TraitPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
