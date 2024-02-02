import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebapiComponent } from './webapi/webapi.component';

const routes: Routes = [
  {path:"adddata",component:WebapiComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
