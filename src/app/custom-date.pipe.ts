import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as momenttz from 'moment-timezone';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string, format: string="mediumDate", timezone:any = null): string {
    console.log(value, 'value in pipe', format, " format ", timezone, " timezone");

    let finalValue = '';

    // Checking for default format
    format = this.getFormat(format);

    // console.log("get FOrmat: ", format);
    // console.log("FOrmat Validation: ", this.isFormatValid(value, format));
    
    // Checking the format is valid or not
    if (this.isFormatValid(value, format)) {
      finalValue = momenttz(value).tz(timezone).format(format);
    } else {
      finalValue = momenttz(value).tz(timezone).format('DD MMM, YYYY');
    }

    return finalValue;
  }

  isFormatValid(v:any, f: any) {
    return moment(v).isValid(); // false
    // return moment(v, f).isValid(); // false
  }

  getFormat(f: any) {
    let r = f;
    switch (f) {
      case 'short':
        r = 'M/D/YY, H:MM A';
        break;
      case 'medium':
        r = 'MMM D, YYYY, H:mm:ss A';
        break;
      case 'long':
        r = 'MMMM D, YYYY, H:mm:ss A Z';
        break;
      case 'full':
        r = 'dddd, MMMM D, YYYY, H:mm:ss A Z';
        break;
      case 'shortDate':
        r = 'M/D/YY';
        break;
      case 'mediumDate':
        r = 'MMM D, YYYY';
        break;
      case 'longDate':
        r = 'MMMM D, YYYY';
        break;
      case 'fullDate':
        r = 'dddd, MMMM D, yyyy';
        break;
      case 'shortTime':
        r = 'H:mm A';
        break;
      case 'mediumTime':
        r = 'H:mm:ss A';
        break;
      case 'longTime':
        r = 'H:mm:ss A Z';
        break;
      case 'fullTime':
        r = 'H:mm:ss A Z';
        break;
    }

    return r;
  }
}
