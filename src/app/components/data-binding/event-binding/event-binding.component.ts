import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  question1: string = "What is Event Binding?";

  answer1: string = "Event binding is a mechanism that allows the component to respond to user actions or browser events occurring in the view (DOM).";



  explanation: string = "In our component, we declared and initialized a boolean property called 'isDisabled'. To toggle between a disabled input (user cannot type) and an enabled input (user can type), we use Angular property binding in the template: [disabled]=\"isDisabled\". This binds the HTML disabled property to the 'isDisabled' property in the component. When 'isDisabled' is true, the input field becomes disabled and the user cannot enter text. When it is false, the input field is enabled and the user can type. This demonstrates how data flows from the component (TypeScript) to the view (HTML) using property binding.";


  question: string = "Why do we need string interpolation if property binding can do everything that string interpolation can do?"
  answer: string = "Because string interpolation syntax is very simple as compared to property binding syntax"

  eventExplanation: string = "In our component, we created methods called 'hello()' and 'toggle()'. In the template, we use event binding with parentheses syntax (click) to listen for a button click event. When the user clicks the button, Angular calls the specified methods in the component. The 'hello()' method logs a message to the console, showing communication from the view to the component. The 'toggle()' method changes the value of the boolean property 'isDisabled'. When 'isDisabled' changes, the input field updates automatically through property binding. This demonstrates how event binding allows data and actions to flow from the view (HTML) to the component (TypeScript).";


  isDisabled: boolean = false;

  helloMessage: string = "Console logging to indicate that a click event triggeres the component, from view to component"

  message: string = '';

  toggle() {
    this.isDisabled = !this.isDisabled;
  }

  hello() {
    console.log(this.helloMessage);
  }

  onInput(event: any) {
  console.log(event.target.value);
  }

  onMouseOver() {
    this.message = "Mouse is over!";
    console.log(this.message);

  }

  onMouseOut() {
    this.message = "Hover over the box";
    console.log(this.message);
  }

}
