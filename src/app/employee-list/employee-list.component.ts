import { Component } from "@angular/core";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent {
  employees: any[];
  // This property keeps track of which radio button is selected
  // We have set the default value to All, so all the employees
  // are displayed in the table by default
  selectedEmployeeCountRadioButton: string = "All";

  constructor() {
    this.employees = [
      {
        code: "emp101",
        name: "Tom",
        gender: "Male",
        annualSalary: 5500,
        dateOfBirth: "9/6/1982"
      },
      {
        code: "emp102",
        name: "Alex",
        gender: "Male",
        annualSalary: 5700.95,
        dateOfBirth: "9/6/1982"
      },
      {
        code: "emp103",
        name: "Mike",
        gender: "Male",
        annualSalary: 5900,
        dateOfBirth: "12/8/1979"
      },
      {
        code: "emp104",
        name: "Mary",
        gender: "Female",
        annualSalary: 6500.826,
        dateOfBirth: "9/6/1982"
      },
      {
        code: "emp105",
        name: "John",
        gender: "Male",
        annualSalary: 32500.826,
        dateOfBirth: "11/03/2005"
      },
      {
        code: "emp106",
        name: "Lina",
        gender: "Female",
        annualSalary: 61500.826,
        dateOfBirth: "03/10/1980"
      },
      {
        code: "emp107",
        name: "Pepe",
        gender: "Male",
        annualSalary: 72500.826,
        dateOfBirth: "2/06/2005"
      },
      {
        code: "emp108",
        name: "Morgan",
        gender: "Female",
        annualSalary: 43500.826,
        dateOfBirth: "03/10/1980"
      }
    ];
  }

  // Depending on which radio button is selected, this method updates
  // selectedEmployeeCountRadioButton property declared above
  // This method is called when the child component (EmployeeCountComponent)
  // raises the custom event - countRadioButtonSelectionChanged
  // The event binding is specified in employeeList.component.html
  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Male").length;
  }

  getFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Female").length;
  }

}
