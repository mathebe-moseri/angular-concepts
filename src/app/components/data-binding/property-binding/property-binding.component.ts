import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

  question1: string = "What is Property Binding?";

  answer1: string = "Property binding is a superset of string-interpolation, it can do whatever string-interpolation can do. It binds a component property to a DOM element property, allowing dynamic updates and supporting all data types not just strings.";

domElement: string = `
A DOM element is an HTML element that the browser converts into a JavaScript object inside the DOM (Document Object Model). 
In other words, a DOM element is the browser’s object version of an HTML element.

- HTML element → what you write in your code
- DOM element → what the browser creates and uses internally

They represent the same element, but one is the code you write, and the other is the object the browser works with.

In Angular:
- [] → used to bind something dynamically
- [domProperty] → binds a component property to a DOM element property
`;


  explanation: string = "In our component, we declared and initialized a boolean property called 'isDisabled'. To toggle between a disabled input (user cannot type) and an enabled input (user can type), we use Angular property binding in the template: [disabled]=\"isDisabled\". This binds the HTML disabled property to the 'isDisabled' property in the component. When 'isDisabled' is true, the input field becomes disabled and the user cannot enter text. When it is false, the input field is enabled and the user can type. This demonstrates how data flows from the component (TypeScript) to the view (HTML) using property binding.";

  explanation1: string = "String interpolation ({{ ... }}) always converts the value to a string. Property binding ([property]=) sets the actual DOM property, keeping its data type (boolean, number, object, etc.)."


  question: string = "Why do we need string interpolation if property binding can do everything that string interpolation can do?"
  answer: string = "Because string interpolation syntax is very simple as compared to property binding syntax"

  comparison: string = "Both String Interpolation and Property Binding are used to transfer data from the component (TypeScript) to the view (HTML template). String interpolation uses double curly braces {{ }} and is mainly used to display data inside HTML content, such as text between tags. Property binding uses square brackets [ ] and is used to bind values to HTML element properties like disabled, value, src, or href. String interpolation is simple and ideal for displaying text, while property binding is more powerful because it can bind to element properties and handle different data types such as boolean, number, or objects. In summary, interpolation is best for displaying data, and property binding is best for setting element properties dynamically.";

  isDisabled: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', 'lightblue')
  }
}
