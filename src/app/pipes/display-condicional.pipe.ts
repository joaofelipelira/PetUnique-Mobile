import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayCondicional'
})
export class DisplayCondicionalPipe implements PipeTransform {

  transform(value: any, defaultValue: string = 'Informação não disponível'): string {
    return value ? value : defaultValue;
  }

}
