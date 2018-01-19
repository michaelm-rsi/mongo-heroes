import { Pipe, PipeTransform } from '@angular/core';
import {Traits} from './traits'

@Pipe({
  name: 'trait',
  pure: false
})
export class TraitPipe implements PipeTransform {
  dice = ['d4','d6','d8','d10','d12'];
  transform(t: Traits){
    return '<ul>'
      +'<li>Agility: ' + this.dice[t.agility.rank] + ' + ' + t.agility.modifier + '</li>'
      +'<li>Smarts: ' + this.dice[t.smarts.rank] + ' + ' + t.smarts.modifier + '</li>'
      +'<li>Spirit: ' + this.dice[t.spirit.rank] + ' + ' + t.spirit.modifier + '</li>'
      +'<li>Strength: ' + this.dice[t.strength.rank] + ' + ' + t.strength.modifier + '</li>'
      +'<li>Vigor: ' + this.dice[t.vigor.rank] + ' + ' + t.vigor.modifier + '</li>'
      +'</ul>';
  }
}
