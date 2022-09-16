import {Component, OnInit} from '@angular/core';
import {CurrenciesDataService} from "../services/currencies-fetch.service";
import {FormControl, FormGroup} from "@angular/forms";

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

  registrationForm: FormGroup;
  firstInput = new FormControl(this.firstAmount);
  secondInput = new FormControl(this.secondAmount);
  firstSelect = new FormControl(this.firstSelected);
  secondSelect = new FormControl(this.secondSelected);

  constructor(private currenciesData: CurrenciesDataService) {
    currenciesData.getCurrencies().subscribe((data) => {
      this.currencies = data.rates;
      this.allCurrencies = Object.keys(this.currencies);
      this.secondAmount = (
        (this.firstAmount * this.currencies[this.secondSelected]) /
        this.currencies[this.firstSelected]
      ).toFixed(2);
    });
    this.registrationForm = new FormGroup({
      firstInput: this.firstInput,
      secondInput: this.secondInput,
      firstSelect: this.firstSelect,
      secondSelect: this.secondSelect
    });
  }

  amountChange(flag: string) {
    if (flag === 'first-input') {
      this.secondAmount = (
        (this.firstAmount * this.currencies[this.secondSelected]) /
        this.currencies[this.firstSelected]
      ).toFixed(2);
    } else if (flag === 'second-input') {
      this.firstAmount = (
        (this.secondAmount * this.currencies[this.firstSelected]) /
        this.currencies[this.secondSelected]
      ).toFixed(2);
    }
  }

  currencyChange(flag: string) {
    if (flag === 'first-select') {
      this.secondAmount = (
        (this.firstAmount * this.currencies[this.secondSelected]) /
        this.currencies[this.firstSelected]
      ).toFixed(2);
    } else if (flag === 'second-select') {
      this.firstAmount = (
        (this.secondAmount * this.currencies[this.firstSelected]) /
        this.currencies[this.secondSelected]
      ).toFixed(2);
    }
  }

  ngOnInit(): void {

  }
}
