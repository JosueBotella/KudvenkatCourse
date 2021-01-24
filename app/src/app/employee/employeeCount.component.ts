import { Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'employeeCount.component.html',
    styleUrls: ['employeeCount.component.scss']
})

export class employeeCountComponent {
    

    selectedRadioButtonValue:string = "All";

    @Output() countRadioButtonSelectionChanged:EventEmitter<string> = new EventEmitter<string>();

    

    @Input() all: number | undefined;

    @Input() male: number | undefined;

    @Input()  female: number | undefined;


    onRadioButtonSelectionChange(){
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
        console.log(this.selectedRadioButtonValue)
    }
}