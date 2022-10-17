import { Component, OnInit } from '@angular/core';
import { todoList } from '../fakeData/fakeData';
import { Todo } from '../models/todo.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  todoListData: Todo[] = [];
  message: string = '';

  constructor(private data: DataService) { }


  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
    // this.data.currentTodos.subscribe(todo => this.todoListData.push(todo))
    this.data.loadCurrentTodos.subscribe(todo => this.todoListData = todo)
  }

  newMessage = (): void => {
    console.log('hit')
    this.data.changeMessage('hello from landing')
  }

  // addNewTodo = (newTodoName: string, newTodoStatus: string): void => {
  //   this.todoListData.push({name: newTodoName, status: newTodoStatus, showEdit: false});
  // }

}
