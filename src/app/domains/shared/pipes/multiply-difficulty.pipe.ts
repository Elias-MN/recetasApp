import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyDifficulty',
  standalone: true
})
export class MultiplyDifficultyPipe implements PipeTransform {

  transform(value: number): number {
    return value * 10;
  }

}
