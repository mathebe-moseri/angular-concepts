import { Component } from '@angular/core';
import { StringInterpolationComponent } from '../components/data-binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from '../components/data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from '../components/data-binding/event-binding/event-binding.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
