import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from '../../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class BoletaService {
  private API_ENDPOINT = API_ENDPOINT.endpoint;

  headers: HttpHeaders = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  });

  constructor(private httpClient: HttpClient) {

  }

  async ObtenerBoleta(boleta) {
    const url = `${this.API_ENDPOINT}/documentos/Boletas?numeroboleta=${boleta}`;
    try {
      return await this.httpClient.get(url, { headers: this.headers }).toPromise();
    } catch (error) {
      return { status: false, code: 804, message: 'Error al ejecutar la petición.' };
    }
  }

}
