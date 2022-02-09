import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string, format: string): string {
    console.log(value, 'value in pipe', format);

    let finalValue = '';
    if (format) {
      finalValue = moment().format(format)
    } else {
      finalValue = moment().format('DD MMM, YYYY')
    }
        
    return finalValue;
  }

}

