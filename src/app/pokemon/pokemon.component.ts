import {Component, inject, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../models/pokemon.model";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit {

  private pokemonService: PokemonService = inject(PokemonService);
  public pokemons : Pokemon[] = [];

  ngOnInit() {
    this.pokemons = this.pokemonService.pokemons();
  }

}
