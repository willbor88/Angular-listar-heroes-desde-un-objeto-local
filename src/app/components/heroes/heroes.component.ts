import { Component, OnInit} from '@angular/core';
import { HeroesService} from '../../servicios/heroes.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

})
export class HeroesComponent implements OnInit {
public heroes:any []= [];




  constructor(
    private _heroeService:HeroesService,
    private _router:Router,
   
    
    
    
    ) {
     

  }

  ngOnInit() {
    this.heroes = this._heroeService.getHeroes()
    for (const i of this.heroes) {
    
    console.log(this.heroes);
  
    }
   
  }

  verHeroe(index){
    this._router.navigate(['/Heroe',index]);    

  }

  

}
