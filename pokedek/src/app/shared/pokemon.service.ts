import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //private pokemonUrl:string = "../../assets/api/pokemons_25.json";
  private pokemonUrl:string = "shared/pokemons"
  constructor(private _http:HttpClient) { }

  getPokemonList():Observable<Pokemon[]>{
    return this._http.get<Pokemon[]>(this.pokemonUrl);
  }

  deletePokemon(pokemon:Pokemon):Observable<Response>{
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let options = {headers:headers}
    let Url = `${this.pokemonUrl}/${pokemon.id}`;
    return this._http.delete<Response>(Url,options)
  }

  getPokemonDetails(id):Observable<Pokemon>{
    let Url = `${this.pokemonUrl}/${id}`
    return this._http.get<Pokemon>(Url);
  }

  addPokemon(pokemon:any):Observable<Pokemon>{
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let options = {headers:headers};
    let body = (pokemon);
    let Url = `${this.pokemonUrl}`;

    return this._http.post<Pokemon>(Url,body,options)
  }
}
