import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    favorits: this.fb.array([
      ['Metal Gear'],
      ['Death Strangin']
    ], Validators.required)
  });

  newFavorit: FormControl = this.fb.control('', Validators.required);

  get favoritArr() {
    return this.myForm.get('favorits') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

  validField(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  add() {
    if (this.newFavorit.invalid) return;
    this.favoritArr.push(new FormControl(this.newFavorit.value));
    this.newFavorit.reset();
  }

  delete(index: number) {
    this.favoritArr.removeAt(index);
  }

}
