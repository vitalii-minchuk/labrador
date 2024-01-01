import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './view/events.component';
import { EventFormComponent, EventItemComponent } from './components';

@NgModule({
  declarations: [EventsComponent, EventItemComponent, EventFormComponent],
  imports: [
    CommonModule,
    MatButtonModule],
  exports: [
    EventsComponent,
    EventItemComponent
  ]
})
export class EventsModule { }
