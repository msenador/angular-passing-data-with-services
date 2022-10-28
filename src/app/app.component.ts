import { Component } from '@angular/core';
import { SuperHero } from './models/superhero.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'test';
  heroes: SuperHero[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.getSuperHeroes().subscribe((result: SuperHero[]) => (
      this.heroes = result
    ))
    console.log(this.heroes)
  }

  newMessage = (): void => {
    this.data.changeMessage('Hello from parent')
  }
}
