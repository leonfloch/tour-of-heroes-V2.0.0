import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

/**
 * Servicio que obtiene los heroes
 */
@Injectable()
export class HeroService {

  

  constructor() { }

  /**
   * retorna la lista de heroes
   */
  getHeroes() {
    return Promise.resolve(HEROES);

  }

  /**
   * Retorna un heroe a partir del id enviado
   * por parametro
   */
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  /**
   * Metodo de pruebas
   * retorna los heroes de forma lenta
   */
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  }

}
