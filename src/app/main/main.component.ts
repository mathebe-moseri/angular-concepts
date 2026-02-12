import { Component } from '@angular/core';
import { StringInterpolationComponent } from '../components/data-binding/string-interpolation/string-interpolation.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StringInterpolationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
