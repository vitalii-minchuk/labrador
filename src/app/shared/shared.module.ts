import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesService } from './services/cities.service';

@NgModule({
  providers: [
    CitiesService,
  ],
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
