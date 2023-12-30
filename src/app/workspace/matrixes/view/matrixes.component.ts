import { Component, OnInit } from '@angular/core';

import { ConsoleService } from '../../console/services/console.service';
import { IConsoleMatrixInfo } from '../../console/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matrixes',
  templateUrl: './matrixes.component.html',
  styleUrl: './matrixes.component.scss'
})
export class MatrixesComponent implements OnInit {
  matrixInfo: IConsoleMatrixInfo[] = []

  constructor(private consoleService: ConsoleService, private router: Router) {
  }

  ngOnInit(): void {
    this.consoleService.getConsoleMatrices().subscribe((res) => {
      this.matrixInfo = res
    })
  }

  goToPage(link?: string) {
    if (!link) return

    this.router.navigate(['/console/matrixes/' + link.toLocaleLowerCase()])

  }
}
