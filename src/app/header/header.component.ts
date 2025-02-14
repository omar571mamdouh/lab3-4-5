import { Component, inject } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink ,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  counter : number = 0;
  counterService = inject(CounterService);

  ngOnInit(){
    this.counterService.getcounter().subscribe((response) => this.counter = response);
  }
}
