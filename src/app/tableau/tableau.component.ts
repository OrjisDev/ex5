import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {

  voitures: Voiture[]

  detailsShowed: string[] = ["Prix : 30000€", "Vitesse maximale : 180 km/h"]

  constructor(){
    this.voitures = [
      {
        id: 0,
        marque: "Toyota",
        modele: "Corolla",
        details: ["Prix : 30000€", "Vitesse maximale : 180 km/h"]
      },
      {
        id: 1,
        marque: "Honda",
        modele: "Civic",
        details: ["Prix : 28000€", "Vitesse maximale : 170 km/h"]
      },
      {
        id: 2,
        marque: "Ford",
        modele: "Focus",
        details: ["Prix : 32000€", "Vitesse maximale : 185 km/h"]
      },
      {
        id: 3,
        marque: "Volkswagen",
        modele: "Golf",
        details: ["Prix : 31000€", "Vitesse maximale : 190 km/h"]
      }
    ]
  }
  onClickShowDetails(details: string[]){
    this.detailsShowed = details
  }
}

interface Voiture{
  id: number,
  marque: string,
  modele: string
  details : string[]
}


