import { Injectable } from '@angular/core';
import { Technologys } from '../models/technologys';
// import { Technologys } from '../models/technologys';

@Injectable({
  providedIn: 'root'
})
export class TechnosService {

  // technos : Technologys[] = []
  technos: any[] = [];

  constructor() { }

  // createTechno(techno:Technologys) {
    // tslint:disable-next-line: typedef
    createTechno(techno: any) {
    const newTechno = {id: Date.now(), ...techno};
    // this.technos = [techno, ...this.technos];
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos);
  }

  // getTechnos(): Technologys[]{
  getTechnos(): Technologys[]{
  return this.technos;
  }

  // deleteTechno(tech: Technology) {
  // tslint:disable-next-line: typedef
  deleteTechno(tech: Technologys){
    this.technos = this.technos.filter(t => t.id !== tech.id);
    return this.technos;
  }

}
