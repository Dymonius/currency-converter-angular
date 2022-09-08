import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  firstAmount: any = 1;
  secondAmount: any = 1;
  firstSelected = 'USD';
  secondSelected = 'EUR';

  @Input() currencies: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
