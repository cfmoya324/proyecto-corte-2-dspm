import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInfiniteScrollContent, IonSearchbar, IonList, IonItem, IonInfiniteScroll } from '@ionic/angular/standalone';
import { EpisodioCardComponent } from '../episodio-card/episodio-card.component';
import { RickYMortyService } from 'src/app/Servicios/rick-y-morty.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInfiniteScrollContent, IonSearchbar, IonList, IonItem, IonInfiniteScroll, EpisodioCardComponent],
})
export class Tab1Page {
  personajes: Array<any> = [];
  episodios: Array<any> = [];
  localizaciones: Array<any> = [];
  url_next_p: string = '';
  url_next_e: string = '';
  infiniteScrollCount: number = 1;

  async cargarPersonaje(pageNum: string) {
    await this.bd.getAllCharacters(pageNum).toPromise().then((resp: any) => {

      for (const element of resp.results) {
        this.personajes.push(element);
      }
      console.log("Mis personajes: ", this.personajes);

      this.url_next_p = resp.info.next;
      console.log("SIGUIENTE: ", this.url_next_p);
    });
  }

  async cargarEpisodio(pageNum: string) {
    await this.bd.getAllEpisodes(pageNum).toPromise().then((resp: any) => {
      
      for (const element of resp.results) {
        this.episodios.push(element);
      }
      console.log("Mis episodios: ", this.episodios);

      this.url_next_e = resp.info.next;
      console.log("SIGUIENTE: ", this.url_next_e);
    });
  }

  async cargarLocalizaciones(pageNum: string) {
    await this.bd.getAllLocations(pageNum).toPromise().then((resp: any) => {
      
      for (const element of resp.results) {
        this.localizaciones.push(element);
      }
      console.log("Mis localizaciones: ", this.localizaciones);

      this.url_next_e = resp.info.next;
      console.log("SIGUIENTE: ", this.url_next_e);
    });
  }

  encontrarPersonaje(idlink: string) {
    const re = new RegExp("\/[0-9]+");
    let id = idlink.match(re) || ['/0'];

    let res = this.personajes.find( (x: { id: { toString: () => string | number; }; }) => x.id.toString() == id[0].slice(1));

    return res;
  }

  episodiosCut() {
    return this.episodios.slice(0,3);
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    if (this.infiniteScrollCount < 3) {
      this.infiniteScrollCount++;
      this.cargarEpisodio(this.infiniteScrollCount.toString());
    }
    setTimeout(() => {
      event.target.complete();
    }, 3000);
  }

  constructor(private bd: RickYMortyService) {}

  ngOnInit() {
    this.cargarPersonaje('1');
    this.cargarPersonaje('2');
    this.cargarPersonaje('3');
    this.cargarPersonaje('4');
    this.cargarPersonaje('5');
    this.cargarLocalizaciones('1');
    this.cargarLocalizaciones('2');
    this.cargarLocalizaciones('3');
    this.cargarLocalizaciones('4');
    this.cargarLocalizaciones('5');
    this.cargarEpisodio('1');
  }
}
