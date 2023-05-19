import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyView'
})
export class CurrencyViewPipe implements PipeTransform {

  transform(value: any, view: any, font_weight: any): unknown {
    let result = ""
 
    if (font_weight == "bold"){
      result += "<b>"
    }


    if(view == "compair") {
      result +=`${value.cc} = ${value.rate}UAH`;
    }else {
      result +=`${value.cc} : ${value.rate}UAH / last modify date: ${value.exchangedate} `;
  }
 
  return result
 }
}
