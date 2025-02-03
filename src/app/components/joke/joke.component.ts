import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

  joke ="";

  constructor(private jokeservice:JokeService) {}

  ngOnInit() {
    this.getAnotherjoke()
  }

  getAnotherjoke(){
    this.jokeservice.getjoke().subscribe((data:any)=>{
      this.joke = data.value
    })
  }
}