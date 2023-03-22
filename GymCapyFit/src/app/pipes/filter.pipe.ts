import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPlaces = [];
    for(const place of value){
      if(place.Nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){//|| place.categoria.toLowerCase().indexOf(arg.toLowerCase()) > -1
        resultPlaces.push(place);
      };
    };
    return resultPlaces;
  }

}