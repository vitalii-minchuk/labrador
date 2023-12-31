import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './workspace/console/view/console.component';
import { MatrixesComponent } from './workspace/matrixes/view/matrixes.component';
import { EventsComponent } from './workspace/events/view/events.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
