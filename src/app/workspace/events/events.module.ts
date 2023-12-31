import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './view/events.component';
import { EventItemComponent } from './event-item/event-item.component';

@NgModule({
  declarations: [EventsComponent, EventItemComponent],
  imports: [
    CommonModule,
    MatButtonModule],
  exports: [
    EventsComponent,
    EventItemComponent
  ]
})
export class EventsModule { }
