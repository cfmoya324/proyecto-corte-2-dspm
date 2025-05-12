import { Component, Input, OnInit } from '@angular/core';
import { RickYMortyService } from 'src/app/Servicios/rick-y-morty.service';
import { IonContent, IonAvatar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonSearchbar, IonList, IonItem, IonLabel, IonModal, IonButton, IonImg } from '@ionic/angular/standalone';

@Component({
    selector: 'app-episodio-card',
    templateUrl: './episodio-card.component.html',
    styleUrls: ['./episodio-card.component.scss'],
    imports: [IonContent, IonAvatar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonSearchbar, IonList, IonItem, IonLabel, IonModal, IonButton, IonImg],
})

export class EpisodioCardComponent  implements OnInit {

  @Input() personajes: Array<any> = [];
  @Input() episodio: any;
  @Input() modalId: any;

  encontrarPersonaje(idlink: string) {
    const re = new RegExp("\/[0-9]+");
    let id = idlink.match(re) || ['/0'];

    let res = this.personajes.find( (x: { id: { toString: () => string | number; }; }) => x.id.toString() == id[0].slice(1));

    return res;
  }

  constructor(private bd: RickYMortyService) {}

  ngOnInit() {}

}
