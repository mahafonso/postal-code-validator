import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public validatePostalCode = (postalCode:string): any => this.http.get(`//viacep.com.br/ws/${postalCode}/json`);

}
