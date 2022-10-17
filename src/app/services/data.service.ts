import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { todoList } from "../fakeData/fakeData";
import { Todo } from "../models/todo.model";

@Injectable({providedIn: 'root'}) // without object ---> ERROR NullInjectorError: R3InjectorError(AppModule)
export class DataService {
  private messageSource = new BehaviorSubject<string>("default message");
  private todoListOnLoad = new BehaviorSubject<Todo[]>([...todoList])

  currentMessage = this.messageSource.asObservable();
  loadCurrentTodos = this.todoListOnLoad.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}