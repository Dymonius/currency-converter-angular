import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currencies: Array<any> = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Array<any>>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .subscribe(currencies => {
        console.log(currencies)
        this.currencies=currencies;

      });
  }
}
