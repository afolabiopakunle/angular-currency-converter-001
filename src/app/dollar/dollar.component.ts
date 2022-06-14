import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from '../currency-converter.service';

@Component({
  selector: 'app-dollar',
  templateUrl: './dollar.component.html',
  styleUrls: ['./dollar.component.css']
})
export class DollarComponent implements OnInit {

  constructor(private currencyConverter: CurrencyConverterService) { }

  ngOnInit() {
  }

  get getCurrency() {
    return this.currencyConverter.amount / 600;
  }

  set setCurrency(value) {
    this.currencyConverter.amount = value
  }

}