import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perceptron-info',
  templateUrl: './perceptron-info.component.html',
})
export class PerceptronInfoComponent {

  public perceptronInfo: any
  constructor(private router: Router) {
    this.perceptronInfo = this.router?.getCurrentNavigation()?.extras?.state?.['response']
  }

  async ngOnInit() {
    
  }
  

  async volver() {
    this.router.navigate(['/']);
  }
}
