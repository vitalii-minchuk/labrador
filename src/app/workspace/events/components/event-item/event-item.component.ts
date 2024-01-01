import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICommonMatrixEvent } from "../../models";
import { EventsService } from "../../services/events.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss'
})
export class EventItemComponent implements OnInit {
  @Input() event: ICommonMatrixEvent | null

  constructor(
    private http: HttpClient,
    private eventsService: EventsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onItemSelect(): void {
    if (!this.event) return
    const link = `/console/matrixes/events/${this.event.id}`

    this.router.navigate([link])
  }
}
