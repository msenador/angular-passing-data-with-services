import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  todoListData: Todo[] = [];
  message: string = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.loadCurrentTodos.subscribe(todo => this.todoListData = todo)
  }

  newMessage = (): void => {
    console.log('hit')
    this.data.changeMessage('hello from child')
  }

  addNewTodo = (newTodoName: string, newTodoStatus: string): void => {
    this.todoListData.push({name: newTodoName, status: newTodoStatus, showEdit: false})
  }

}
