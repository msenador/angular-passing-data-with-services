import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  message: string = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage = (): void => {
    console.log('hit')
    this.data.changeMessage('hello from child')
  }

}
