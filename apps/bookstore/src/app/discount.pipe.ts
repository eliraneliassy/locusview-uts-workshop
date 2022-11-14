import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if (value > 50) {
      return value * (1 - args[0])
    }

    return value;
  }

}
