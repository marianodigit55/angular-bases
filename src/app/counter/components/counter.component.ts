import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{counter}}</p>

  <button (click)="increase(+1)">+1</button>
  <button (click)="increase(-1)">-1</button>
  <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent{
  constructor(){ }
  public counter: number = 10;

  increase(value: number){
    this.counter += value;
  }
  //mi respuesta a la tarea
  decrease(){
    this.counter -= 1;
  }
  //segunda tarea
  reset(){
    this.counter = 10;
  }
}
