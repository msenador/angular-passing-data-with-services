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
  toggleEdit: boolean = false;
  todoList4Input: Todo[] = todoList;
  testItems = ['item1', 'item2', 'item3', 'item4'];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.loadCurrentTodos.subscribe(todo => this.todoListData = todo)
  }

  newMessage = (): void => {
    this.data.changeMessage('hello from landing')
  }

  handleToggleEdit = (todoName: string): void => {
    this.todoListData.map((todo) => {
      if (todo.name === todoName) {
        todo.showEdit = !todo.showEdit
      }
    })
  }

  handleDelete = (todoName: string): void => {
    this.todoListData = this.todoListData.filter((todo) => todo.name !== todoName)
  }

  handleIncompleteClick = (todoName: string): void => {
    this.todoListData.forEach((todo) => {
      if (todo.name === todoName) {
        todo.status = 'Incomplete';
      }
    })
  }

  handleInProgressClick = (todoName: string): void => {
    this.todoListData.forEach((todo) => {
      if (todo.name === todoName) {
        todo.status = 'In Progress';
      }
    })
  }

  handleCompletedClick = (todoName: string): void => {
    this.todoListData.forEach((todo) => {
      if (todo.name === todoName) {
        todo.status = 'Completed';
      }
    })
  }

  // HERE starts decorators for @Input

  handleAddItem = (newTodoName: string, newTodoStatus: string): void => {
    this.todoList4Input.push({name: newTodoName, status: newTodoStatus, showEdit: false})
  }

  // HERE starts decorators for @Output

  addItemFromParent = (newItem: string): void => {
    this.testItems.push(newItem)
  }
}
