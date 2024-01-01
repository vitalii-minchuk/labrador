import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrixesComponent } from '../matrixes/view/matrixes.component';
import { EventsComponent } from '../events/view/events.component';
import { ConsoleComponent } from './view/console.component';
import { EventFormComponent } from '../events/components';

const routes: Routes = [
  { path: 'console',
  component: ConsoleComponent,
  children: [
    {path: 'matrixes', component: MatrixesComponent },
    {path: 'matrixes/events', component: EventsComponent },
  ]},
  {path: 'console/matrixes/events/:id', component: EventFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsoleRoutingModule { }
