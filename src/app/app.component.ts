import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CitiesService } from './shared/services/cities.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [CitiesService],
  imports: [CommonModule, RouterOutlet, CoreModule, SharedModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
