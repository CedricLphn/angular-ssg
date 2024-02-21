import {Component, inject} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../../models/pokemon.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  private pokemonService: PokemonService = inject(PokemonService);
  private activatedRoute : ActivatedRoute = inject(ActivatedRoute);

  public pokemon : Pokemon = {} as Pokemon;

  constructor() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pokemonService.getPokemonById(id).subscribe(pokemon => this.pokemon = pokemon);
  }
}
