import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattime'
})
export class FormattimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    var d = new Date(value);
    d.getFullYear;
    console.log("format time pipe: " + d);
    return value;
  }

}
