import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi aplicación Angular';  
  url:string = "https://images.pexels.com/photos/396714/pexels-photo-396714.jpeg";
  
  constructor(){
    this.title="Mi aplicación Angular hecha por Josué B.";
  }
  
  isBold: boolean = false;
  fontSize: number = 30;
  isItalic: boolean = true;
  color: boolean=true;
  ancho:number=200;
  classesToApply: string = 'italicsClass boldClass colorClass';

  addStyles() {
    let styles = {
        'font-weight': this.isBold ? 'bold' : 'normal',
        'font-style': this.isItalic ? 'italic' : 'normal',
        'font-size.px': this.fontSize,
        'color':this.color ? 'red' : 'blue'
    };

    return styles;
  }

 
  changeColor(){
      this.color= !this.color;      
  }

  toggleBtn:boolean=true;

  toggleData(){
    this.toggleBtn = !this.toggleBtn
  }
 
}
