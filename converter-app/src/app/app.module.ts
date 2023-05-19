import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyHeaderComponent } from './currency-header/currency-header.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { CurrencyViewPipe } from './currency-view.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyHeaderComponent,
    CurrencyFormComponent,
    CurrencyViewPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
