import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConsoleComponent } from './view/console.component';

@NgModule({
  providers: [RouterOutlet],
  declarations: [ConsoleComponent],
  imports: [
    CommonModule,
  ],
})
export class ConsoleModule {}
