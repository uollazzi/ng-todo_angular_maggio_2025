import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODOS } from '../../data/todos';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoAddComponent } from "../todo-add/todo-add.component";

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent, TodoAddComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  ngOnInit(): void {
    this.todos = TODOS; // qui ci sarà la chiamata ajax
  }

  completa(id: number) {
    console.log("Richiesta completamento todo con id:", id);

    // qui ci sarà la richiesta ajax per completare il todo
    const todoDaCompletare = this.todos.find(t => t.id == id);

    if (todoDaCompletare) {
      todoDaCompletare.completed = !todoDaCompletare.completed;
    }
  }

  inserisciNuovoTodo(testo: string) {
    // qui ci sarà la richiesta ajax per inserire il todo
    const ids: number[] = this.todos.map(t => t.id); // trasformo l'array di todos in array di id (numbers)
    const nuovoId = Math.max(...ids) + 1;

    const nuovoTodo: Todo = {
      id: nuovoId,
      text: testo,
      completed: false
    }

    this.todos.push(nuovoTodo);
  }
}
