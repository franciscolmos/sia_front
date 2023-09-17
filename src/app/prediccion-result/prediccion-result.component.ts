import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion-result',
  templateUrl: './prediccion-result.component.html',
  styleUrls: ['./prediccion-result.component.css']
})
export class PrediccionResultComponent {
  public prediccionResult: any
  public entrada: any
  public prediccion: any
  public respuesta: any
  constructor(private router: Router) {
    this.prediccionResult = this.router?.getCurrentNavigation()?.extras?.state?.['response']
    const inicioEntrada =  this.prediccionResult.message.indexOf("Entrada: ");
    const finEntrada =  this.prediccionResult.message.indexOf(" -- Prediccion: ");
    const inicioPrediccion =  this.prediccionResult.message.indexOf("Prediccion: ");
    const finPrediccion =  this.prediccionResult.message.indexOf(" -- Respuesta: ");
    const inicioRespuesta =  this.prediccionResult.message.indexOf("Respuesta: ");

    // Extrae cada sección utilizando substring
    this.entrada =  this.prediccionResult.message.substring(inicioEntrada, finEntrada);
    this.prediccion =  this.prediccionResult.message.substring(inicioPrediccion, finPrediccion);
    this.respuesta =  this.prediccionResult.message.substring(inicioRespuesta);
    
  }

  async volver() {
    this.router.navigate(['/']);
  }

}
