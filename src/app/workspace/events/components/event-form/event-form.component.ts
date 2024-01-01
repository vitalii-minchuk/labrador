import { Component, OnInit } from "@angular/core";
import { EventsService } from "../../services/events.service";
import { ActivatedRoute } from "@angular/router";
import { ISingleMatrixEvent } from "../../models";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss'
})
export class EventFormComponent implements OnInit {
  singleEvent: ISingleMatrixEvent | null

  constructor(private eventsService: EventsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']
      const isNew = id === 'new'

      !isNew && this.loadMatrixEvent(id)
    })
  }

  loadMatrixEvent(id: string) {
    this.eventsService.getMatrixEventById(id).subscribe((res => {
      this.singleEvent = res
    }))
  }
}
