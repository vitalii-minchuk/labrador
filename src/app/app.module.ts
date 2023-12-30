import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ConsoleComponent } from './workspace/console/view/console.component';
import { MatrixesComponent } from './workspace/matrixes/view/matrixes.component';
import { EventsComponent } from './workspace/events/view/events.component';
import { MaterialModule } from './shared/material.module';


const routes: Routes = [
  { path: 'console',
  component: ConsoleComponent,
  children: [
    {path: 'matrixes', component: MatrixesComponent },
    {path: 'matrixes/events', component: EventsComponent }
  ]},
];

@NgModule({
  declarations: [AppComponent, ConsoleComponent, MatrixesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
