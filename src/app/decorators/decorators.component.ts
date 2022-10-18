import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {

  @Input() todoListFromParent: Todo[] = [];
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItemFromChild = (value: string): void => {
    this.newItemEvent.emit(value)
  }

}

// @Output understanding
// 1. Create variable being emmitted (Line 12)

// 2. Create function to emit to value (Line 19)

// 3. Go to HTML and create input and button to get value and execute the function alling the emitter

// 4. Go to HTML for parent(in this case "landing") and bind "newItemEvent"
// emitter to a function you will/have created in component.ts which will
// take the "$event" parameter in HTML (Line 51) but string in component.ts (Line 74)

//@Input understanding
