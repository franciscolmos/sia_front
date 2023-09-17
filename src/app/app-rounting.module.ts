import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelosComponent } from './modelos/modelos.component';
import { PerceptronInfoComponent } from './perceptron-info/perceptron-info.component';
import { PrediccionResultComponent } from './prediccion-result/prediccion-result.component';

const routes: Routes = [
  { path: '', component: ModelosComponent },
  { path: 'perceptron_info', component: PerceptronInfoComponent },
  { path: 'prediccion_result', component: PrediccionResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
