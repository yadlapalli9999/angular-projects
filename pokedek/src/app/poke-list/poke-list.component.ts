import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { Pokemon } from '../shared/pokemon';
import { Observable } from 'rxjs';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  @ViewChild('childmodel',{static:false}) public childModel:ModalDirective;
  pokemon:Pokemon[]
  erroeMessage:string
  //model Properties
  selectedPokemonLoaded:boolean= false;
  pokeDetails:Pokemon;
  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    //get all pokemons
    this.getPokemons()
  }
  
  getPokemons(){
   this.pokemonService.getPokemonList().subscribe((pokemon:Pokemon[])=>{
     console.log(pokemon)
     this.pokemon = pokemon
   })
  }
  hideChildModel(){
    this.childModel.hide()
  }

  singlePokemonDetails(id:number){
    this.pokemonService.getPokemonDetails(id).subscribe((pokemon:Pokemon)=>{
      this.pokeDetails = pokemon;
      this.selectedPokemonLoaded = true;
      this.childModel.show();
    })
  }

  deletePokemonId(pokemon:Pokemon){
    this.pokemonService.deletePokemon(pokemon).subscribe(()=>{
      console.log(pokemon)
      this.getPokemons()
    })
  }
}
