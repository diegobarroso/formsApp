import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Person {
  name: string;
  favorits: Favorit[];
}

interface Favorit {
  id: number;
  name: string
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;
  
  person: Person = {
    name: 'Diego',
    favorits: [
      {id: 1, name: 'Metal Gear'},
      {id: 2, name: 'DeathStranding'}
    ]
  }

  newGame: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('Save');
    
  }

  validName(): boolean {
    return this.myForm?.controls['name'].invalid && this.myForm?.controls['name'].touched;
  }

  delete(index: number) {
    this.person.favorits.splice(index,1);
  }

  add() {
    this.person.favorits.push({
      id: this.person.favorits.length +1 ,
      name: this.newGame
    });
    this.newGame = '';
  }


}
