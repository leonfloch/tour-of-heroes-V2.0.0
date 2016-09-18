import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroeDetailComponent } from '../heroe-detail/heroe-detail.component';
import {HeroService} from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes-app.component.html',
  styleUrls: ['./heroes-app.component.css'],
  
})
/**
 * Componente con la informacion de los heroes
 */
export class HeroesAppComponent implements OnInit {

  //---------------------------------------------------------------------------
  // ATRIBUTOS
  //---------------------------------------------------------------------------

  /** Heroe seleccionado */
  selectedHero:Hero;

  /**lista de heroes */
  public heroes:Hero[];

  //---------------------------------------------------------------------------
  // METODOS
  //---------------------------------------------------------------------------

  /**
   * Constructor
   * inyeccion de dependencia de HeroService
   */
  constructor(private router: Router, private heroService:HeroService) {

  }

  /**
   * carga la lista de heroes antes de mostrar la vista
   */
  ngOnInit() {
    this.getHeroes();

  }

  /**
   * Carga la lista de heroes
   */
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  /**
   * Hero seleccionado
   */
  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }

  /**
   * Redirecciona al detalle del heroe
   */
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);

  }

}
