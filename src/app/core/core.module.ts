import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/layout';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [CommonModule, HeaderComponent]
})
export class CoreModule {}
