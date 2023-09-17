import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent {
  constructor(private http: HttpClient, private router: Router) {}
  title = 'sia_front';
  api_base = "http://127.0.0.1:8000"
  entrenarPerceptronNoVectorizado() {
    // Llama al endpoint para entrenar el modelo
    this.http.get(`${this.api_base}/entrenar_perceptron_no_vectorizado`, {}).subscribe((response) => {
      console.log('Entrenamiento exitoso', response);
      this.router.navigate(['/perceptron_info'], { state: { response }});
    });
  }

  predecir() {
    // Llama al endpoint para realizar una predicción
    this.http.get(`${this.api_base}/predecir`, {}).subscribe((response) => {
      console.log('Predicción exitosa', response);
      this.router.navigate(['/prediccion_result'], { state: { response }});
    });
  }
}

