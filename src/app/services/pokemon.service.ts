import {inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Pokemon} from "../models/pokemon.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly baseUrl : string = 'https://pokebuildapi.fr/api/v1';
  private readonly _httpClient : HttpClient = inject(HttpClient);

  public pokemons : Signal<Pokemon[]> = signal([]);

  constructor() {
    this.pokemons = toSignal(this.fetchPokemons('10'), { initialValue: [] });
  }

  private fetchPokemons(limit : string) : Observable<Pokemon[]> {
    return this._httpClient.get<Pokemon[]>(`${this.baseUrl}/pokemon/limit/${limit}`);
  }

  public getPokemonById(id : string) : Observable<Pokemon> {
    return this._httpClient.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`);
  }

}
