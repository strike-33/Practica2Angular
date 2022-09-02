import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  _url = 'https://63123a8cb466aa9b0386ab43.mockapi.io/Ususarios'

  constructor(private http: HttpClient) 
  {}

   getPersonas(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this._url , {headers: header});
   }
}
