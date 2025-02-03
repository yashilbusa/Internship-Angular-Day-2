import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users = [
    {id:1,name:"Yashil",isSingle:true,salary:8000},
    {id:2,name:"Raj",isSingle:false,salary:5000},
    {id:3,name:"Meet",isSingle:false,salary:7000},
    {id:4,name:"Sudhir",isSingle:true,salary:3000}
  ]

  age:number = 21;

  items = [
    { id: 1, name: 'Book' },
    { id: 2, name: 'Laptop' },
    { id: 3, name: 'Phone' },
    { id: 4, name: 'Watch' },
  ];

  trackByFn(index:number, i: { id: number; }) {
    return i.id; 
  }
}
