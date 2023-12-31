import { NgModule } from '@angular/core';
import { EventsModule } from './events/events.module';
import { MatrixesModule } from './matrixes/matrixes.module';
import { ConsoleModule } from './console/console.module';

@NgModule({
  imports: [
    EventsModule,
    MatrixesModule,
    ConsoleModule,
  ],
  exports: [
    EventsModule,
    MatrixesModule,
    ConsoleModule
  ]
})
export class WorkspaceModule {}
