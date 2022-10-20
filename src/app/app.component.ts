import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'mycapital';
  public monTitre: string;
  public monIntroduction: string;
  public maPhraseAccroche: string;

  champSaisi = new FormControl('');

  public capitale: any;
  public population: any;
  public monnaie: any;
  public langue: any;
  public drapeau: any;
  

  constructor(private http: HttpClient) {
    this.monTitre = "MyCapitale";
    this.monIntroduction = "Obtenez les informations sur un pays !";
    this.maPhraseAccroche = "Insérez le pays dans le formulaire ci-dessous.";
  }

  ngOnInit(): void {
    
  }

  public afficherChampSaisi() {
    

    return this.http.get(`https://restcountries.com/v2/name/${this.champSaisi.value}`)
    .subscribe((data:any) => {
    this.capitale = data[0].capital,
    this.population = `${data[0].population} habitants`,
    this.monnaie = data[0].currencies[0].name,
    this.langue = data[0].languages[0].nativeName
    this.drapeau = data[0].flag
    });
    
      
  }
}
