import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesoChileno'
})
export class PesoChilenoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return '$ ' + value.toString().replace(/(\.\d+)|\B(?=(\d{3})+(?!\d))/g, function(m,g1){
        return g1 || "."
    });
  }

}
