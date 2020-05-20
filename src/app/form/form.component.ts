import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public postalCode: string;
  public invalidPostalCode: boolean;
  public street: string;
  public number: string;
  public complement: string;
  public neighborhood: string;
  public state: string;
  public city: string;
  public address: any;
  public successForm: boolean;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  public validatePostalCode = () => {
    this.apiService.validatePostalCode(this.postalCode)
      .subscribe(response => {
        if (response.erro) {
          this.invalidPostalCode = true;
        } else {
          this.invalidPostalCode = false;

          this.street = response.logradouro;
          this.neighborhood = response.bairro;
          this.city = response.localidade;
          this.state = response.uf;
        }
      });
  }

  public saveAddress = () => {
    this.address = {
      postalCode: this.postalCode,
      street: this.street,
      number: this.number,
      complement: this.complement,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state
    };

    this.successForm = true;
  }

}
