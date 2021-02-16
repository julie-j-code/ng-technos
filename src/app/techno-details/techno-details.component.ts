import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Technologys } from '../models/technologys';
// import { Technologys } from '../models/technologys';


@Component({
  selector: 'app-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css']
})
export class TechnoDetailsComponent implements OnInit {
  @Input() tech: any;
  // @Input() tech!:Technologys;
  @Output() deleteTech = new EventEmitter<any>();
  // @Output() deleteTech=new EventEmitter<Technologys>();

  constructor() {

  }

  ngOnInit(): void {
  }

  // delete(tech:Technologys){
  delete(tech: any) {
    this.deleteTech.emit(tech);

  }

}
