import { Component, OnInit } from '@angular/core';

import { EventsService } from '../services/events.service';
import { EEventStatus } from '../../../enums';
import { IEvent } from '../models';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  events: IEvent[] = []

  constructor(private eventsService: EventsService) {
  }

  ngOnInit(): void {
    this.eventsService.getMatrixEvents(EEventStatus.ACTIVE).subscribe((res) => {
      this.events = res
    })
  }
}
