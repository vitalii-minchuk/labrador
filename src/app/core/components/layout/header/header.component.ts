import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../../../shared/services/cities.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.citiesService.getAllCities().subscribe()
  }
}
