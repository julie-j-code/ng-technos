import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/technologys';
import { TechnosService } from '../services/technos.service';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.css']
})
export class TechnoListComponent implements OnInit {

  allTechnos : any[] = [];
  constructor(private ts: TechnosService) { }

  ngOnInit(): void {
    this.getTechnos();
  }

  getTechnos(){
    this.allTechnos=this.ts.getTechnos();
  }

}
