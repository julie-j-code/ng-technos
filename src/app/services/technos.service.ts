import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnosService {

  technos : string[] = []

  constructor() { }

  createTechno(techno:any) {
    this.technos = [techno, ...this.technos];
  }



}
