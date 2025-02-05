import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

  constructor(private dataservice: DataService) { }

  data = ""

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.dataservice.getPosts().subscribe((d:any)=>{
      this.data = d
    })
  }
}
