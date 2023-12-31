import { Component, Input, OnInit } from "@angular/core";
import { ICommonMatrixEvent } from "../models";
import { HttpClient } from "@angular/common/http";
import { EventsService } from "../services/events.service";

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss'
})
export class EventItemComponent implements OnInit {
  @Input() event: ICommonMatrixEvent | null

  constructor(private http: HttpClient, private eventsService: EventsService) {
  }

  ngOnInit(): void {
  }

  onItemSelect(): void {
    if (!this.event) return

    this.eventsService.getMatrixEventById(this.event.id).subscribe()
  }
}
