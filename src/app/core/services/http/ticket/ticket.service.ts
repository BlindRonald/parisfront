import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from '../../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private API_ENDPOINT = API_ENDPOINT.endpoint;

  headers: HttpHeaders = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  });

  constructor(private httpClient: HttpClient) {

  }

  async TicketPrint(fecha, n_local, numTerTsl, numTranTsl, transaction_id) {
    const url = `${this.API_ENDPOINT}/documentos/Ticket?date=${fecha}&localNumber=${n_local}&numTerTsl=${numTerTsl}&numTranTsl=${numTranTsl}&transaction_id=${transaction_id}`;
    try {
      return await this.httpClient.get(url, { headers: this.headers }).toPromise();
    } catch (error) {
      return { status: false, code: 804, message: 'Error al ejecutar la petición.' };
    }
  }

}
