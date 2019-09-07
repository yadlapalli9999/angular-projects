import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'app-poke-add',
  templateUrl: './poke-add.component.html',
  styleUrls: ['./poke-add.component.css']
})
export class PokeAddComponent implements OnInit {
  formPokemon :any = {};
  
  cardTitle:String = "Add Pokemon"
  constructor(private pokemonService:PokemonService,private router:Router) { }

  ngOnInit() {
  }

  savePokemon(formValues:any){
    this.pokemonService.addPokemon(formValues).subscribe(res=>{
      console.log(res)
      this.router.navigate(['/'])
      console.log('Pokemon saved');
    })
  }

}
