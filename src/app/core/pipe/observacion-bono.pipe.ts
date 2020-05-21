import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'observacionBono'
})
export class ObservacionBonoPipe implements PipeTransform {

  transform(value: string): any {
    let primero = value.indexOf('(');
    let segundo = value.indexOf(')');
    let string = value.substring(primero, (segundo + 1));
    return string;
  }

}
