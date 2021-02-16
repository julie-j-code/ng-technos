import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnosService {

  technos : string[] = []

  constructor() { }

  createTechno(techno:any) {
    const newTechno = {id:Date.now(), ...techno};
    // this.technos = [techno, ...this.technos];
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos)
  }

  getTechnos(){
    return this.technos;
  }



}
