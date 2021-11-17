import { Component, OnInit } from '@angular/core';
import { PlanetsApiService } from './../../services/planets-api';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  planets:any[] = [];

  constructor(private api: PlanetsApiService) {}

  ngOnInit(): void {
    this.api.getPlanets().subscribe((data: any)=>{
      this.planets = data.results.map((element: any) => {
        element.id = this.getPlanetId(element.url);
        return element;
      });    
    })
  }

  getPlanetId(planet: any) {
    let id = planet.split('/').reverse()[1];
    return id;
  }
  
}
