import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
  constructor(private http: HttpClient) {
  }

  getCurrencies() {
    const headers = {'apikey': 'WZ23EfshBSLNX9nU6cQgVePVRwyRrGsz'}
    return this.http.get<DataFromServer>(
      'https://api.apilayer.com/fixer/latest', {headers}
    );
  }
}
