import { Component, OnInit } from '@angular/core';
import { ApiserviceService, Student } from '../apiservice.service';

@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.css']
})
export class WebapiComponent implements OnInit{

  stud:Student=new Student("","","",0,0);
  message:string="";
  studs:Student[]=[];
  studs1:Student[]=[];
  constructor(private apiservices:ApiserviceService){}
  
  
  ngOnInit(): void 
  {
   this.getAllData();
  }

  saveData()
  {
    this.apiservices.saveData(this.stud).subscribe(responses=>
      {
         
         this.message="record saved";
         this.getAllData();
      },error=>
      
      {
        this.message="Some error is occcured";
      });
    
  }

  getAllData()
  {
      this.apiservices.getAllStudent(this.stud).subscribe(responses=>
      {
        this.studs=responses;
        this.message="All Records are found";
        this.studs1= this.studs.filter(p=>p.sname.includes(String(this.stud.sname)));

    
      },error=>
      {
        this.message="Something went wrong";
      }   
      );
      
  }
}
