import { Pipe, PipeTransform } from '@angular/core';

// import sd from 'silly-datetime';
// import {format,fromNow} from 'silly-datetime';
import sd from 'silly-datetime'
// var sd = require('silly-datetime');

@Pipe({
  name: 'formattime'
})
export class FormattimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    // var d = new Date(value);
    // d.getFullYear;
    // console.log("format time pipe: " + d);
    //value is 10 digits timestamp, js will need to use 13 digits timestamp
    value = sd.format(value *1000,'YYYY-MM-DD HH:mm');
    return value;
  }

}
