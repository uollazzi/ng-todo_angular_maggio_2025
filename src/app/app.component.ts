import { Component } from '@angular/core';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { AutoListComponent } from "./components/auto-list/auto-list.component";
import { CarrelloMiniComponent } from "./components/carrello-mini/carrello-mini.component";

type Section = "todo" | "auto" | "carrello" | null;

@Component({
  selector: 'app-root',
  imports: [TodoListComponent, AutoListComponent, CarrelloMiniComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-todo';

  selectedSection: Section = "auto";

  select(section: Section) {
    this.selectedSection = section;
  }
}
