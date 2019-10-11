import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/global/heroe';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(
    
    private _router:Router,
  ) { }

  ngOnInit() {
  }

busqueda(texto:string){
  this._router.navigate(['/Busqueda',texto]);

}


  


}