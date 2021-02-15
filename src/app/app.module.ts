import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { employeeTitle } from "./employee-list/employeeTitle.pipe";
import { EmployeeCountComponent } from "./employee-list/employeeCount.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    EmployeeListComponent,
    employeeTitle,
    EmployeeCountComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
