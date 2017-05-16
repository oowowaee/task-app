// http://karlclement.com/blog/dev/angular2/2016/04/10/capitalize-pipe-angular2/
import {Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core";

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value:String): String {
    if (value) {
      return value.replace(/\b\w/g, symbol => symbol.toLocaleUpperCase());
    }
    return value;
  }
}