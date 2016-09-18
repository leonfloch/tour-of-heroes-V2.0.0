import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
/**
 * 
 */
export class DashboardComponentComponent implements OnInit {

  public heroes: Hero[] = [];


  /**
   * Constructor donde se inyecta el servicio de heroes
   * inyecta el servicio de rutas
   */
  constructor(private router: Router, private heroService: HeroService) { }

  /**
   * 
   */
  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  /**
   * 
   */
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }


}
