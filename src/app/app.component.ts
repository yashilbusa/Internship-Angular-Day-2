import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { JokeComponent } from './components/joke/joke.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  // imports: [UserComponent,JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    ngOnInit() {
      
      const pizzaObservable = new Observable((subscriber)=>{
        subscriber.next({name:"Farm House",value:"true"})
        subscriber.next({name:"Margherita",value:"true"})
        subscriber.next({name:"7-Cheese",value:"true"})

      })

      pizzaObservable.subscribe({
        next:(value)=>console.log(value)
      })

    }
}
