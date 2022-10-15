import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  message: string = '';

  constructor(private data: DataService) { }


  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage = (): void => {
    console.log('hit')
    this.data.changeMessage('hello from landing')
  }

}
