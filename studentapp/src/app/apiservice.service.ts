import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService 
{

  constructor(private HttpClient:HttpClient)
   { 

   }

   saveData(stud:Student)
   {
      return this.HttpClient.post<boolean>("http://localhost:9090/AddStudent",stud)
   }

   getAllStudent(stud:Student)
   {
      return this.HttpClient.get<Student[]>("http://localhost:9090/GetAllData");
   }
}

export class Student
{
  sname:string
  gender:	string ;
  address:string ;
  mobno:number;
  rollno:number;

  constructor(sname:string,gender:string,address:string,mobno:number,rollno:number)
  {
    this.sname=sname;
    this.gender=gender;
    this.address=address
    this.mobno=mobno;
    this.rollno=rollno;

  }
}
