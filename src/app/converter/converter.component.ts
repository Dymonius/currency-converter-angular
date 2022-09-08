import {Component, OnInit} from '@angular/core';
import {CurrenciesDataService} from "../services/currencies-fetch.service";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  firstAmount: any = 1;
  secondAmount: any = 1;
  firstSelected = 'USD';
  secondSelected = 'UAH';
  allCurrencies: string[] = [];
  currencies: any;


  constructor(private currenciesData: CurrenciesDataService) {
    currenciesData.getCurrencies().subscribe((data) => {
      this.currencies = data.rates;
      this.allCurrencies = Object.keys(this.currencies);

      this.secondAmount = (
        (this.firstAmount * this.currencies[this.secondSelected]) /
        this.currencies[this.firstSelected]
      ).toFixed(2);
      console.log(this.currencies)
    });
  }

  ngOnInit(): void {
  }

  firstAmountChange() {
    this.secondAmount = (
      (this.firstAmount * this.currencies[this.secondSelected]) /
      this.currencies[this.firstSelected]
    ).toFixed(2);
  }

  secondAmountChange() {
    this.firstAmount = (
      (this.secondAmount * this.currencies[this.firstSelected]) /
      this.currencies[this.secondSelected]
    ).toFixed(2);
  }

  firstCurrencyChange() {
    console.log(this.firstSelected)
    this.secondAmount = (
      (this.firstAmount * this.currencies[this.secondSelected]) /
      this.currencies[this.firstSelected]
    ).toFixed(2);
  }

  secondCurrencyChange() {
    this.firstAmount = (
      (this.secondAmount * this.currencies[this.firstSelected]) /
      this.currencies[this.secondSelected]
    ).toFixed(2);
  }
}
