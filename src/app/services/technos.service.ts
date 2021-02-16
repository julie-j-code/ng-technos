import { Injectable } from '@angular/core';
import { Technology } from '../models/technologys';

@Injectable({
  providedIn: 'root'
})
export class TechnosService {

  technos : Technology[] = []

  constructor() { }

  createTechno(techno:Technology) {
    const newTechno = {id:Date.now(), ...techno};
    // this.technos = [techno, ...this.technos];
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos)
  }

  getTechnos(): Technology[]{
    return this.technos;
  }



}
