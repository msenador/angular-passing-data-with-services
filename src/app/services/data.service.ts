import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { todoList } from "../fakeData/fakeData";
import { SuperHero } from "../models/superhero.model";
import { Todo } from "../models/todo.model";

@Injectable({providedIn: 'root'}) // without object ---> ERROR NullInjectorError: R3InjectorError(AppModule)
export class DataService {
  private messageSource = new BehaviorSubject<string>("default message");
  private todoListOnLoad = new BehaviorSubject<Todo[]>([...todoList])

  currentMessage = this.messageSource.asObservable();
  loadCurrentTodos = this.todoListOnLoad.asObservable();

  constructor(private http: HttpClient) {}

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`https://localhost:7259/api/superherostuff`)
  }
}