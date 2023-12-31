import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConsoleComponent } from './view/console.component';
import { MatListModule } from '@angular/material/list';
import { ConsoleRoutingModule } from './console.routing';

@NgModule({
  declarations: [ConsoleComponent, ],
  imports: [
    CommonModule,
    RouterOutlet,
    MatListModule,
    ConsoleRoutingModule,
  ],
  exports: [ConsoleComponent]
})
export class ConsoleModule {}
