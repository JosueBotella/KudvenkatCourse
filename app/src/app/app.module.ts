import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { employeeListComponent } from './employee/employeeList.component';
import { employeeTitlePipe } from './employee/employeeTitle.pipe';
import { employeeCountComponent } from './employee/employeeCount.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    employeeListComponent,
    employeeTitlePipe,
    employeeCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
