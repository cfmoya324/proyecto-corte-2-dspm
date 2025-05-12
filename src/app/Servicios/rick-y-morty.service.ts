import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { URL_RM } from '../Config/url.servicios';

@Injectable({
  providedIn: 'root'
})
export class RickYMortyService {

  constructor(private http: HttpClient) {}

  getAllCharacters(pageNum: string):any{
    let url = `${URL_RM}/character?page=${pageNum}`

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('Personajes Rick y Morty: ', res);
        return res;
      })
    );
  }

  getAllEpisodes(pageNum: string):any{
    let url = `${URL_RM}/episode?page=${pageNum}`

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('Episodios Rick y Morty: ', res);
        return res;
      })
    );
  }
  getAllLocations(pageNum: string):any{
    let url = `${URL_RM}/location?page=${pageNum}`

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('Localizaciones Rick y Morty: ', res);
        return res;
      })
    );
  }
}
