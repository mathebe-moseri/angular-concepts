import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() {

   }

   LogError1() {
    console.log("Error Logged LogIn");
   }

   LogError2() {
    console.log("Error Logged Menu");
   }

   LogError3() {
    console.log("Just testing");
   }
}
