import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName',
})
export class ProductNamePipe implements PipeTransform {
  transform(value: string, target: string): string {
    value = value.replace(/\s{2,}/g, '-');

    return value.split(' ').join('-');
  }
}
