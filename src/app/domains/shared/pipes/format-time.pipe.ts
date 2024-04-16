import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
  standalone: true
})
export class FormatTimePipe implements PipeTransform {

  transform(seconds: number | undefined): string {
    if (seconds == undefined) {
      return "Sin resultados";
    }
    let minutes = Math.floor(seconds / 60);
    let minutesFormat = `${minutes} minutos`

    return minutesFormat;
  }

}
