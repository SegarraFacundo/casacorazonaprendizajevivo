import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class EmailService {

  private url: string = "https://mailthis.to/casacorazonaprendizajevivo";

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  SendEmail(input: any) {
    const headers = new HttpHeaders({
      Accept:'text/html'
    });
    
    return this.httpClient.post(this.url, input, { responseType: 'text' });
  }
}
