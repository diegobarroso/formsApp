import { FormControl } from '@angular/forms';


export const namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';


export const validUsername = (control: FormControl) => {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'diegobarroso') {
      return {
        invalidUsername: true
      }
    }
    return null;
  }
