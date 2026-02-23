import { Component } from '@angular/core';
import { Observable } from 'rxjs'; //1

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent {

  myObservable = new Observable(observer => {
    console.log("observable start"); //3
    observer.next("a");
    observer.next("b");
    observer.next("c");
  }); //2

  ngOnInit(): void {
this.myObservable.subscribe((val => {
  console.log(val);
}))
  }

}
