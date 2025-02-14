import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cardicon',
  imports: [],
  templateUrl: './cardicon.component.html',
  styleUrl: './cardicon.component.css'
})
export class CardiconComponent {
   counter : number = 0;
   counterService = inject(CounterService)

   ngOnInit(){
    this.counterService.getcounter().subscribe((response) => this.counter = response);
   }

   decreaseCounter(){
    this.counterService.changecounter(this.counter -1)
   }
   IncreaseCounter(){
    this.counterService.changecounter(this.counter +1)
   }
}
