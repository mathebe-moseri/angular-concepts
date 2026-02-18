import { Component } from '@angular/core';
import { StringInterpolationComponent } from '../components/data-binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from '../components/data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from '../components/data-binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from '../components/data-binding/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from '../components/directives/directives.component';
import { PipesComponent } from '../components/decorators/pipes/pipes.component';
import { LoginComponent } from '../components/login/login.component';
import { MenuComponent } from '../components/menu/menu.component';
import { LifecycleHooksComponent } from '../components/lifecycle-hooks/lifecycle-hooks.component';
import { ParentComponent } from '../components/parent/parent.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, DirectivesComponent, PipesComponent, LoginComponent, MenuComponent, LifecycleHooksComponent, ParentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
