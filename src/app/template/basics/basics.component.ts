import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('Sending to the backend', this.myForm.value);
    this.myForm.reset();    
  }

  validProduct(): boolean {
    return this.myForm?.controls['product'].invalid && this.myForm?.controls['product'].touched;
  }

  validPrice(): boolean {
    return this.myForm?.controls['price'].invalid && this.myForm?.controls['price'].touched;
  }

  validStock(): boolean {
    return this.myForm?.controls['stock'].invalid && this.myForm?.controls['stock'].touched;
  }

}
