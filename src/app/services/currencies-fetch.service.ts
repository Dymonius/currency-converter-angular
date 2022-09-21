import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface DataFromServer {
  base: string;
  date: string;
  rates: Object;
  success: boolean;
  motd: Object;
}

@Injectable({
  providedIn: 'root',
})
export class CurrenciesDataService {
  constructor(private http: HttpClient) {
  }

  getCurrencies() {
    return this.http.get<DataFromServer>('https://api.exchangerate.host/latest');
  }
}
