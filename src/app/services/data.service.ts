import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  //Get data
  getPokemons(limit:number,offset:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
  }

  //get more pokemon data
  searchPokemon(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

}
