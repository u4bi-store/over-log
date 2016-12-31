import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewOverlogo'
})
export class ViewOverlogoPipe implements PipeTransform {

  transform(value: string, count: number): string {
    let result;
    switch(count){
      case 0: return value.replace('games won','');
      case 1: return value.replace('hours','시간');
      case 2: return this.repHeroName(value);
    }
  }

  repHeroName(str : string){
    let result =null;
    let temp = null;
    switch(str){
      case 'Genji' : temp = '로드호그'; break;
      case 'Mccre' : temp = '바스티온'; break;
      case 'Pharah' : temp = '파라'; break;
      case 'Reaper' : temp = '젠야타'; break;
      case 'Soldier:76' : temp = '솔져:76'; break;
      case 'Sombra' : temp = '솜브라'; break;
      case 'Tracer' : temp = '트레이서'; break;
      case 'Bastion' : temp = '바스티온'; break;
      case 'Hanzo' : temp = '한조'; break;
      case 'Junkrat' : temp = '정크리'; break;
      case 'Mei' : temp = '메이'; break;
      case 'Torbjörn' : temp = '토르비욘'; break;
      case 'Widowmaker' : temp = '위도우메이커'; break;
      case 'D.va' : temp = '디바'; break;
      case 'Reinhardt' : temp = '라인하르트'; break;
      case 'Roadhog' : temp = '로드호그'; break;
      case 'Winston' : temp = '윈스톤'; break;
      case 'Zarya' : temp = '자리야'; break;
      case 'Ana' : temp = '안나'; break;
      case 'Lúcio' : temp = '루시오'; break;
      case 'Mercy' : temp = '메르띠'; break;
      case 'Symmetra' : temp = '시메트라'; break;
      case 'Zenyatta' : temp = '젠야타'; break;
      default: break;
    }
    return result = str.replace(str,temp);
  }
}
