import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { todoList } from "../fakeData/fakeData";
import { Todo } from "../models/todo.model";

@Injectable({providedIn: 'root'})
export class DataService {
  private messageSource = new BehaviorSubject<string>("default message");
  // private todoToAdd = new BehaviorSubject<Todo>({name: '', status: '', showEdit: false})
  private todoListOnLoad = new BehaviorSubject<Todo[]>([...todoList])

  currentMessage = this.messageSource.asObservable();
  // currentTodos = this.todoToAdd.asObservable()
  loadCurrentTodos = this.todoListOnLoad.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  // addTodoService = (newTodo: Todo): void => {
  //   this.todoToAdd.next(newTodo);
  // }
}