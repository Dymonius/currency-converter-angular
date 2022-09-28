import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() flag: string = '';
  @Input() allCurrencies: string[] = [];
  @Input() selected: string = '';
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('currencySelect', {static: false}) inputRef: ElementRef | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  currencyChange() {
    this.selected = this.inputRef?.nativeElement.value;
    this.onChange.emit({selected: this.selected.split(' ')[1], flag: this.flag});
  }
}
