import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
 // template:`<span>The age of student is {{age}} </span><br><br> <span> Message is {{msg}}
  //</span>`,
  templateUrl:'./child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
 age:number=0;

 @Input()
 msg:string="";

 @Output() myevent=new EventEmitter();

  generateEvent()
  {
    this.myevent.emit("Angular is easy if you know javascript event");
  }
}
