import {Pipe, PipeTransform} from '@angular/core'
@Pipe ({name: 'reverse'})
export class ReversePipe implements PipeTransform{
  transform(arr: any[]) {
    if ( arr !== undefined) {
      return arr.slice().reverse();
    }
  }
}
