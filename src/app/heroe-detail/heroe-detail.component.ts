import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})

/**
 * Componente del detalle de un heroe
 */
export class HeroeDetailComponent implements OnInit {

  //@Input()
  hero: Hero;

  /**
   * Se inyectan los servicios del router y heroes
   */
  constructor(private heroService: HeroService,
    private route: ActivatedRoute) {

  }

  /**
   * 
   */
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  /**
   * Vuelve a la pagina anterior
   */
  goBack(): void {
    window.history.back();
  }


}
