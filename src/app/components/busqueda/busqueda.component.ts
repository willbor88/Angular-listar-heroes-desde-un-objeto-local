import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import {ActivatedRoute  } from '@angular/router';
import { Hero } from '../../global/heroe';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  heroe:Hero[]=[];
  termino:string;
  constructor(
    private _heroeService :HeroesService,
    private _activatedRoute:ActivatedRoute,

    ) { }

  ngOnInit() {
    this.getHeroName();
  }

  getHeroName(){
    this._activatedRoute.params.subscribe(params => {
      console.log(params.texto);
     this.termino =params.texto;
     this.heroe = this._heroeService.getHeroName(params.texto);
    })

  
  
    
    
     
  }

}
