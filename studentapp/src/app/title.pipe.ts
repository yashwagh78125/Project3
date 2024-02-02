import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(name:String, gender: String) 
   {
     if(gender=="male")
      return "Mr "+name;
     else
     return "Mrs "+name;
  }

}
