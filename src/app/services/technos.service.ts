import { Injectable } from '@angular/core';
import { Technologys } from '../models/technologys';

@Injectable({
  providedIn: 'root'
})
export class TechnosService {

  technos : Technologys[] = []

  constructor() { }

  createTechno(techno:Technologys) {
    const newTechno = {id:Date.now(), ...techno};
    // this.technos = [techno, ...this.technos];
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos)
  }

  getTechnos(): Technologys[]{
    return this.technos;
  }



}
