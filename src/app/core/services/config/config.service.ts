import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  async getConfig() {
    try {
      return await this.httpClient.get('./assets/config/config.json').toPromise();
    } catch (error) {
      const resultado = {
        status: false,
        message: 'Error al ejecutar la petición',
        codeStatus: error.status
      };

      return resultado;
    }
  }

}
