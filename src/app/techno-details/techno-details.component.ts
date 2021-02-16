import { Component, Input, OnInit } from '@angular/core';
import { Technologys } from '../models/technologys';


@Component({
  selector: 'app-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css']
})
export class TechnoDetailsComponent implements OnInit {
  @Input() tech!:Technologys;

  constructor() { 
 
    
  }

  ngOnInit(): void {
  }

}
