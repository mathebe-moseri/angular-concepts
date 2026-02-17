import { Component } from '@angular/core';
import { StringInterpolationComponent } from '../components/data-binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from '../components/data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from '../components/data-binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from '../components/data-binding/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from '../components/directives/directives.component';
import { PipesComponent } from '../components/decorators/pipes/pipes.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, DirectivesComponent, PipesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
