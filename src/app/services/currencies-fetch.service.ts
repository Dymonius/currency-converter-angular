import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface DataFromServer {
  base: string;
  date: string;
  rates: Object;
  success: boolean;
  timeSTAMP: number;
}

@Injectable({
  providedIn: 'root',
})
export class CurrenciesDataService {
  constructor(private http: HttpClient) {}
  getCurrencies() {
    return this.http.get<DataFromServer>(
      'http://data.fixer.io/api/latest?access_key=c2b6331e4e270746bc2b2c08f3cbce7a'
    );
  }
}
