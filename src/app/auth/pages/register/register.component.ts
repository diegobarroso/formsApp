import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { emailPattern, namePattern, validUsername } from 'src/app/shared/validator/validations';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  
  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.pattern(this.validatorService.namePattern)]],
    email: [, [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: [, [Validators.required, this.validatorService.validUsername]],
    password: [, [Validators.required, Validators.pattern(this.validatorService.passwordPattern)]],
    confirmPassword: [, [Validators.required]]
  }, {
    validators: [this.validatorService.passwordMatch('password', 'confirmPassword')]
  });

  get emailError(): string {
    if (this.myForm.controls['email'].touched) {
      if (this.myForm.controls['email'].getError('required')) {
        return 'Email is required'
      } else if (this.myForm.controls['email'].getError('pattern')){
        return 'Must be a valid email'
      } else if (this.myForm.controls['email'].getError('takenEmail')){
        return 'Email taken'
      } 
    }
    return '';
  }

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Diego Barroso',
      email: 'info@diegobarroso.es'
    })
  }


  validField(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  /* emailRequired() {
    return this.myForm.controls['email'].getError('required') && this.myForm.controls['email'].touched;
  }

  emailPattern() {
    return this.myForm.controls['email'].getError('pattern') && this.myForm.controls['email'].touched;
  }

  emailTaken() {
    return this.myForm.controls['email'].getError('takenEmail') && this.myForm.controls['email'].touched;
  } */

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
