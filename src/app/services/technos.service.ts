import { Injectable } from '@angular/core';
// import { Technologys } from '../models/technologys';

@Injectable({
  providedIn: 'root'
})
export class TechnosService {

  // technos : Technologys[] = []
  technos : any[] = []

  constructor() { }

  // createTechno(techno:Technologys) {
    createTechno(techno:any) {
    const newTechno = {id:Date.now(), ...techno};
    // this.technos = [techno, ...this.technos];
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos)
  }

  // getTechnos(): Technologys[]{
  getTechnos(){  
  return this.technos;
  }

}
