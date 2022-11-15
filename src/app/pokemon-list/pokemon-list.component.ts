import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent implements OnInit {
  pokemons:any[] = [];
  page:number = 1;
  totalPokemons:number = 20;
  pokemonsPerPage:number =5;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  //get pokemons
  getPokemons(){
    this.dataService.getPokemons( this.pokemonsPerPage,this.page * this.pokemonsPerPage )
    .subscribe((response: any)=>{
      response.results.forEach((result: { name: string; })=>{
        this.dataService.searchPokemon(result.name)
          .subscribe((uniqueResponse:any)=>{
            this.pokemons.push(uniqueResponse);
            console.log(this.pokemons)
          })
      })
    })
  }

  search(value:string){
    this.dataService.searchPokemon(value)
      .subscribe((uniqueResponse:any)=>{
        this.pokemons=[];
        this.pokemons.push(uniqueResponse);
      })
  }

}
