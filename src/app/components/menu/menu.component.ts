import { Component } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'

})
export class MenuComponent {

  constructor(private LoggingService: LoggingService ) {
    // console.log("Error Logged");

    this.LoggingService.LogError2();
  }

}
