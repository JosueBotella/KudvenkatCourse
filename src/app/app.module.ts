import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { employeeTitle } from "./employee-list/employeeTitle.pipe";
import { EmployeeCountComponent } from "./employee-list/employeeCount.component";
import { OthersComponent } from './others/others.component';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    EmployeeListComponent,
    employeeTitle,
    EmployeeCountComponent,
    OthersComponent,
    SimpleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
