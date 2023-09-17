import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PerceptronInfoComponent } from './perceptron-info/perceptron-info.component';
import { AppRoutingModule } from './app-rounting.module';
import { ModelosComponent } from './modelos/modelos.component';
import { PrediccionResultComponent } from './prediccion-result/prediccion-result.component';

@NgModule({
  declarations: [
    AppComponent,
    PerceptronInfoComponent,
    ModelosComponent,
    PrediccionResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
