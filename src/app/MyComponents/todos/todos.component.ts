import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todo!: Todo;
  todos:Todo[];
  constructor(){
    this.todos =[
      {
        sno:1,
        title: "This is title 1",
        desc: "Description 1",
        active: true
      },
      {
        sno:2,
        title: "This is title 2",
        desc: "Description 2",
        active: true
      },
      {
        sno:3,
        title: "This is title 3",
        desc: "Description 3",
        active: true
      },
    ]
   }

  ngOnInit(): void {
    
  }
}
