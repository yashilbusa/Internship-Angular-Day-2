import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe',
  standalone: true
})
export class SortPipePipe implements PipeTransform {

  transform(users:any) {
    return users.sort((a:any, b:any) => a.salary- b.salary);
  }
}
