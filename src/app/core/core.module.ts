import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
