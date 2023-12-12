import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

getHeroDescription(): string{
  return `${this.name} - ${this.age}`;
}

changeHero(): void{
  this.name = 'Doctor Strange';
}

changeAge(): void{
 this.age = 42;
}

resetForm(): void{
  this.name = 'IronMan';
  this.age = 45;

  //Curiosidades Curso
  //document.querySelectorAll('h1')!.forEach(element => {element.innerHTML = '<h1>Desde Angular</h1>'});
}
}
