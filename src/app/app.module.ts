import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroService } from './hero.service'; 

import { AppComponent } from './app.component';
import { HeroesAppComponent } from './heroes-app/heroes-app.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';

import { routing } from './app.routing';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

import { TodoService} from './todoDemo.service';






@NgModule({
  declarations: [
    AppComponent,
    HeroesAppComponent,
    HeroeDetailComponent,
    DashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,    
  ],
  providers: [HeroService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
