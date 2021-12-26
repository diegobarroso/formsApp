import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  public passwordPattern = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/;
  constructor() { }

  validUsername (control: FormControl): ValidationErrors | null{
    const invalidUserNames: string[] = ['diego', 'gabriel', 'barroso', 'benitez'];
    const value: string = control.value?.trim().toLowerCase();
    if (invalidUserNames.includes(value)) {
      return {
        invalidUsername: true
      }
    }
    return null;
  }

  passwordMatch(password1: string, password2: string) {
    return (formGroup : AbstractControl): ValidationErrors | null => {
      const pass1: string = formGroup.get([password1])?.value;
      const pass2: string = formGroup.get([password2])?.value;

      if (pass1 !== pass2) {
        formGroup.get([password2])?.setErrors({passwordsDoNotMatch: true});
        return {
          passwordsDoNotMatch: true
        }
      }

      // formGroup.get([password2])?.setErrors({passwordsDoNotMatch: false});
      return null;
    }
  }
}
