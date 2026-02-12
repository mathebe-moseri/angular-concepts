import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

  question1: string = "What is Property Binding?";

  answer1: string = "Property binding is a superset of string-interpolation, it can do whatever string-interpolation can do. In addition, it can set an element property to a non-string data value like boolean/any data type.";


  explanation: string = "In our component, we declared and initialized a boolean property called 'isDisabled'. To toggle between a disabled input (user cannot type) and an enabled input (user can type), we use Angular property binding in the template: [disabled]=\"isDisabled\". This binds the HTML disabled property to the 'isDisabled' property in the component. When 'isDisabled' is true, the input field becomes disabled and the user cannot enter text. When it is false, the input field is enabled and the user can type. This demonstrates how data flows from the component (TypeScript) to the view (HTML) using property binding.";


  question: string = "Why do we need string interpolation if property binding can do everything that string interpolation can do?"
  answer: string = "Because string interpolation syntax is very simple as compared to property binding syntax"

  comparison: string = "Both String Interpolation and Property Binding are used to transfer data from the component (TypeScript) to the view (HTML template). String interpolation uses double curly braces {{ }} and is mainly used to display data inside HTML content, such as text between tags. Property binding uses square brackets [ ] and is used to bind values to HTML element properties like disabled, value, src, or href. String interpolation is simple and ideal for displaying text, while property binding is more powerful because it can bind to element properties and handle different data types such as boolean, number, or objects. In summary, interpolation is best for displaying data, and property binding is best for setting element properties dynamically.";

  isDisabled: boolean = false;
}
