import { Component } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    constructor(private LoggingService: LoggingService) {
    // console.log("Error Logged");

    this.LoggingService.LogError1();
  }

}
