import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localedate'
})
export class LocaledatePipe implements PipeTransform {

  transform(value: Date, ...args: string[]): string {
    const [locale = "en"] = args;
    return value.toLocaleDateString(locale);
  }

}
