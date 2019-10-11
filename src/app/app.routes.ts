import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';





const APP_ROUTES:Routes=[
{path:'home', component:  HomeComponent},
{path:'About', component:   AboutComponent},
{path:'Heroes', component:  HeroesComponent},
{path:'Heroe/:id', component:  HeroeComponent},
{path:'Busqueda/:texto', component:  BusquedaComponent},
{path:'**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



