import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CurrencyConverterService } from '../currency-converter.service';

@Component({
  selector: 'app-naira',
  templateUrl: './naira.component.html',
  styleUrls: ['./naira.component.css']
})
export class NairaComponent implements OnInit {

  constructor(private currencyConverter: CurrencyConverterService) { }

  @ViewChild('naira') naira: ElementRef;

  ngOnInit() {
  }

  get getCurrency() {
    return this.currencyConverter.amount * 600;
  }

  set setCurrency(value) {
      this.currencyConverter.amount = value
  }

  updateDollar(value) {
    console.log(value)
    this.currencyConverter.amount = value
  }

}