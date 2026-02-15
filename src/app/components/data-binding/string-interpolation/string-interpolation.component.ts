import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.css'
})
export class StringInterpolationComponent {

  question1: string = "What is Data Binding in Angular?";
  question2: string = "What is String Interpolation?";


  answer1: string = "Data binding is the way to communicate between the component (typescript file of the component) and the view (html file of the component)."
  answer2: string = "String Interpolation is a one way data-binding technique that is used to transfer data the from the component (typescript) to the view (html).";

  explanation: string = "In our component (string-interpolation.component.ts) we have declared and initialized a property of type string, named: 'stringInterpolation'. For us to display the property in our view (html) we use string interpolation. String Interpolation uses curly braces ( {{}} ) to call the propery from our component to the view. That is how the data is getting transferred from component to view.";

  stringInterpolation: string = "String Interpolation";

}     