import { NgModule } from "@angular/core";
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    MatSelectModule,
    MatListModule,
  ],
  exports: [
    MatSelectModule,
    MatListModule,
  ],
})
export class MaterialModule {}
