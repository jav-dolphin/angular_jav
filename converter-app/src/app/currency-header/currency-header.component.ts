import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.css']
})
export class CurrencyHeaderComponent {
  @Input() currency: any
  show: boolean = false
  
  name = "Andrii"
  
  ngAfterViewInit(){
    if (this.currency){
      this.show = true  
    }
  }
}


