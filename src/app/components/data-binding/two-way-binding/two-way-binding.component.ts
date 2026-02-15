import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {


  question1: string = "What is Two-Way Data Binding?";
  answer1: string = "Two-way data binding is a mechanism that keeps a component property and a form element connected/in sync so that they always have the same value.";

  explanation: string = "In this example, we use [(ngModel)] on an input field to bind it to the component property 'name'. Any changes in the input field automatically update the component property, and any changes in the component property automatically update the input field. This demonstrates how two-way binding keeps the component and view in sync.";

  question: string = "Why is two-way data binding useful?";
  answer: string = "Two-way binding is useful because it allows the component and the view to stay synchronized automatically, reducing the need for manual event handling or property updates.";

  name: string = "";

  constructor() {
    console.log(this.name);
  }

  onInput(event: any) {
  console.log(event.target.value);
  }

}
