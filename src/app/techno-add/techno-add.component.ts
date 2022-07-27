import { Component, OnInit } from '@angular/core';
import { TechnosService } from '../services/technos.service';

@Component({
  selector: 'app-techno-add',
  templateUrl: './techno-add.component.html',
  styleUrls: ['./techno-add.component.css']
})
export class TechnoAddComponent implements OnInit {

  constructor(private ts:TechnosService) { }

  ngOnInit(): void {
  }

  addTechno(form:any){
    console.log(form.value);
    this.ts.createTechno(form.value); 
    form.reset();   
  }

}
