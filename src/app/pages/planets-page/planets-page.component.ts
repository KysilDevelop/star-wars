import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetsApiService } from './../../services/planets-api';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.scss']
})
export class PlanetsPageComponent implements OnInit {

  planet:any;

  constructor(private route: ActivatedRoute, private api: PlanetsApiService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((params)=>{
      this.api.getPlanet(params['id']).subscribe((planet:any)=>{
        const planetDescript = [];
        for(let key in planet) {
          if (planet.hasOwnProperty(key)) {
            planetDescript.push({label:key,value:planet[key]})
          }
        }
        this.planet = planetDescript;
      })
    })
    
  }

}
