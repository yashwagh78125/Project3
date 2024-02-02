import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
 // template: '<app-child [age]="x" [msg]="msg1"></app-child>',
 templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit
{
   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }
   x:number=10;
   msg1:string= "my name is khan"


   eventHandler(data:any)
   {
       console.log(data);
   }
}
