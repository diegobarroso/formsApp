import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue]
  });

  person = {
    gender: 'F',
    notifications: false
  }

  terms: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms: false
    });

    this.myForm.valueChanges.subscribe(({terms, ...rest}) => {
      this.person = rest;
    })
  }

  save() {
    const formValue = {... this.myForm.value};
    delete formValue.terms;
    this.person = formValue;
    
  }

}
