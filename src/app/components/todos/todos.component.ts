import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // Surligner la tâche terminée
  toggleDone(id:number) {
    this.todos.map((v, i) => {
      if(i == id) v.completed =!v.completed;
      return v;
    })
  }

  // Ajouter une tâche
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    // Effacer la dernière valeur ajouter dans l'input
    this.inputTodo = "";
  }

  // Supprimer la tâche
  deleteTodo(id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

}
