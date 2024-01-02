import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { EventsComponent } from './view/events.component';
import { EventFormComponent, EventItemComponent } from './components';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [EventsComponent, EventItemComponent, EventFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    EventsComponent,
    EventItemComponent
  ]
})
export class EventsModule { }
