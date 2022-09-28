import {Component, OnInit} from '@angular/core';
import {CurrenciesDataService} from "../services/currencies-fetch.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  firstAmount: number = 1;
  secondAmount: number = 1;
  firstSelected: string = 'USD';
  secondSelected: string = 'UAH';
  allCurrencies: string[] = [];
  currencies: any;

  public registrationForm = new FormGroup({
    firstInput: new FormControl(this.firstAmount),
    secondInput: new FormControl(this.secondAmount),
    firstSelect: new FormControl(this.firstSelected),
    secondSelect: new FormControl(this.secondSelected)
  });

  constructor(private currenciesData: CurrenciesDataService) {
    currenciesData.getCurrencies().subscribe((data) => {
      this.currencies = data.rates;
      this.allCurrencies = Object.keys(this.currencies);
      this.secondAmount = +(
        (this.firstAmount * this.currencies[this.secondSelected]) /
        this.currencies[this.firstSelected]
      ).toFixed(2);
    });
  }

  updateAmount($event: any) {
    if ($event.flag === 'first-input') {
      this.firstAmount = $event.amount;
      this.secondAmount = +(
        (this.firstAmount * this.currencies[this.secondSelected]) /
        this.currencies[this.firstSelected]
      ).toFixed(2);
      this.registrationForm.patchValue({secondInput: +this.secondAmount})
      this.registrationForm.patchValue({firstInput: +this.firstAmount})
    } else if ($event.flag === 'second-input') {
      this.secondAmount = $event.amount;
      this.firstAmount = +(
        (this.secondAmount * this.currencies[this.firstSelected]) /
        this.currencies[this.secondSelected]
      ).toFixed(2);
      this.registrationForm.patchValue({firstInput: +this.firstAmount})
      this.registrationForm.patchValue({secondInput: +this.secondAmount})
    }
    console.log(this.registrationForm.value)
  }

  updateCurrency($event: any) {
    if ($event.flag === 'first-input') {
      this.firstSelected = $event.selected;
      this.registrationForm.patchValue({firstSelect: this.firstSelected})
      this.updateAmount({flag: 'first-input', amount: this.firstAmount})
    } else if ($event.flag === 'second-input') {
      this.secondSelected = $event.selected;
      this.registrationForm.patchValue({secondSelect: this.secondSelected})
      this.updateAmount({flag: 'second-input', amount: this.secondAmount})
    }
  }

  ngOnInit(): void {

  }
}
