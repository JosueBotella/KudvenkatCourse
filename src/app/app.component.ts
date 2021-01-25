import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  //templateUrl: './app.component.html',
  template: `
    <app-employee-list></app-employee-list>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  showName(): void {}
}

interface Curso {
  id: number;
  nombre: string;
}
