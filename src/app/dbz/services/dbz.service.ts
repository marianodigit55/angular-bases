import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'}) export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Vegeta',
    power: 130000
  },{
    id: uuid(),
    name: 'Bardock',
    power: 12000
  },{
    id: uuid(),
    name: 'Piccolo',
    power: 10000
  }];


  addCharacter(character: Character):void{
    const newCharacter: Character = {...character,id: uuid(),};

    this.characters.push(character);//final
    //this.characters.unshift();//inicio
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
