import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule,TooltipModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PokeAddComponent } from './poke-add/poke-add.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonData } from '../../src/app/shared/pokemon-data';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PokeAddComponent,
    PokeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    InMemoryWebApiModule.forRoot(PokemonData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
