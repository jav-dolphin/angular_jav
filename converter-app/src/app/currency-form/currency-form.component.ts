import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})
export class CurrencyFormComponent {
@Input() currency: any
// constructor(){console.log(this) } 
// name:string = "Andrii"
birthday = new Date(1988, 3, 15)

// ngAfterViewInit():void{
// this.name= this.name.toUpperCase()
// }
}
 