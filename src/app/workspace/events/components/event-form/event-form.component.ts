import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { EventsService } from "../../services/events.service";
import { ActivatedRoute } from "@angular/router";
import { ISingleMatrixEvent } from "../../models";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss'
})
export class EventFormComponent implements OnInit {
  singleEvent: ISingleMatrixEvent | null
  isNew = true
  isLoading = false

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

  createNewMatrixEvent(form: NgForm) {
    console.log(form.form.value.name)
    this.eventsService.createMatrixEvent({name: form.form.value.name}).subscribe()
  }
}
