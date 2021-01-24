import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  //templateUrl: './app.component.html',
  template: `
    <h1>Working with {{ name }}</h1>
    <input (onkeypress)="showName()" />
    <span></span>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  showName(): void {}
}

interface Curso{
  id:number;
  nombre:string;
  
}
