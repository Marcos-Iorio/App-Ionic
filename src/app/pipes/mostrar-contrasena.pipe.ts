import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encriptar'
})
export class MostrarContrasenaPipe implements PipeTransform {

  transform(value: string, hidden: boolean = true): any {

    if (hidden) {
      value = value.replace(/[a-zA-Z1-9]/gi, '*');
    }

    return value;
  }

}
