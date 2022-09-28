import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() flag: string = '';
  @Input() amount: number = 0;
  @Input() secondAmount: number = 0;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('amountInput', {static: false}) inputRef: ElementRef | undefined;


  constructor() {
  }

  amountChange() {
    this.amount = this.inputRef?.nativeElement.value;
    this.onChange.emit({amount: this.amount, flag: this.flag});
  }

  ngOnInit(): void {
  }

}
