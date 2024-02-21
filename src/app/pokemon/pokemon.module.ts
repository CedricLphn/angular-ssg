import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonComponent} from "./pokemon.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {DetailComponent} from "./detail/detail.component";

export const routes = [
  {
    path: '',
    component: PokemonComponent
  },
  {
    path: ':id',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [PokemonComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class PokemonModule { }
