import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  question1: string = "What are directives?";
  answer1: string = "Directives are classes that add additional behavior to elements in your angular application.";

  isColor: boolean = true;

  students = [
    {
      name: "Harry",
      age: 25,
    },

    {
      name: "Masetla",
      age: 30
    },

    {
      name: "Mathebe",
      age: 31
    }
  ];

  studentList = [
    "Harry",
    "Happy",
    "Rammy"
  ]

  cars = ["Benz", "Bmw", "Corolla", "Mazda"];

  colorName = "#a09393";
  colorName1 = "#6f0404";

  className = "redwhiteClass";

  changeColor() {
    this.isColor = !this.isColor;
  }
}
