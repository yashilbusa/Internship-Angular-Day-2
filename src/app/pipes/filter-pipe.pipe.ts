import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipePipe implements PipeTransform {

  transform(users :any) {
    return users.filter((i:any)=>i.name = i.name.toUpperCase());
  }
}
