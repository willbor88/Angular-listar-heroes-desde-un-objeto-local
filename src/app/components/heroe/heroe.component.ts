import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/global/heroe';
import {HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
public heroe:any ;
private id:string;
  constructor(

    private _activatedRoute:ActivatedRoute,
    private _heroeService:HeroesService,
    
  ) { 
    
    


    this._activatedRoute.params.subscribe(params => {
    console.log(params.id);
    this.id =params.id;

    })
  }

  ngOnInit() {
   this.heroeDetalle();
  }

  heroeDetalle(){

    this.heroe = this._heroeService.getHeroe(this.id);
    console.log(this.heroe) ;
   

  }


}
