import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './workspace/console/view/console.component';
import { MatrixesComponent } from './workspace/matrixes/view/matrixes.component';

const routes: Routes = [
  { path: 'console',
  children: [
    {path: 'matrixes', component: MatrixesComponent}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
