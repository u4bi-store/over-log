import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewOverlogo'
})
export class ViewOverlogoPipe implements PipeTransform {

  transform(value: string, count: number): string {
    let result;
    switch(count){
      case 0: return value.replace('games won','');
      case 1: return value.replace('hours','sigan');
      case 2: return this.repHeroName(value);
    }
  }

  repHeroName(str : string){
  
  }
}
