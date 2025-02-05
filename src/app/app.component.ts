import { Component, ElementRef, ViewChild } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { JokeComponent } from './components/joke/joke.component';
import { fromEvent, of } from 'rxjs';
import { Observable } from 'rxjs';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SortPipePipe } from "./pipes/sort-pipe.pipe";
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { DataComponent } from './components/data/data.component';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SortPipePipe, FilterPipePipe, DataComponent],
  // imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    @ViewChild('search',{static:true}) 
    search?:ElementRef<HTMLInputElement>

    gitUsers =  []

    ngOnInit() {

     const searchobj =  fromEvent(this.search!.nativeElement,"input")
     .pipe(
      debounceTime(1000),
      filter((e:any)=>e.target.value!==""),
      switchMap((input:any)=>{
        return ajax(`https://api.github.com/search/users?q=${input.target.value}`)
      }),
      map((res:any)=>res.response.items)
     )
     searchobj.subscribe((value:any)=>{
      console.log(value)
      this.gitUsers = value
     })
      
      // const numbers = of(1, 2, 3, 4, 5);
      // const evenNumbers = numbers.pipe(filter((x) => x % 2 !== 0));
      // evenNumbers.subscribe((x)=>console.log(x))

      // const pizzaObservable = new Observable((subscriber)=>{
      //   subscriber.next({name:"7-Cheese",veg:true,size:"small"})
      //   subscriber.next({name:"Margherita",veg:true,size:"large"})
      //   subscriber.next({name:"Non Veg Pizza",veg:false,size:"medium"})
      //   subscriber.complete()
      // }).pipe(
      //   tap((pizza:any)=>{
      //     if(pizza.size === "medium"){
      //       throw new Error("Medium Size Pizza Not Available");
      //     }
      //   }),
      //   filter((pizza:any)=>pizza.veg === true),
      //   map((pizza:any)=>pizza.name)
      // )

      // pizzaObservable.subscribe({
      //   next:(value)=>console.log(`Pizza : ${value}`),
      //   error:(err)=>console.log(err.message),
      //   complete:()=>console.log("I am Done Eating Pizzas")
      // })
    }

    users = [
      {id:1,name:"Yashil",salary:8000},
      {id:2,name:"Raj",salary:5000},
      {id:3,name:"Meet",salary:7000},
      {id:4,name:"Sudhir",salary:3000},
      {id:5,name:"Vivek",salary:5000},
      {id:6,name:"Kishan",salary:4000},
      {id:7,name:"Ujas",salary:2000}
    ]

    trackById(index:number, i:any){
      return i.id;
    }

    constructor(private apiService: UserService) {}
    usersapi = this.apiService.getUsers();

    isload = true;
  
      getload() { 
          setInterval(()=>{
            this.isload = false; 
          },2000)
      }
}
