import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

const notBlankValidator = (): ValidatorFn => (control: AbstractControl): ValidationErrors | null =>
  typeof control.value === 'string' && control.value.trim().length === 0
    ? { blank: true }
    : null;

const minWordsValidator = (minWords: number): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
  const value = typeof control.value === 'string' ? control.value.trim() : '';
  const wordCount = value ? value.split(/\s+/).length : 0;

  return wordCount < minWords ? { minWords: { required: minWords, actual: wordCount } } : null;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, notBlankValidator()]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, notBlankValidator(), minWordsValidator(5)]]
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Form submitted:', this.contactForm.value);
    this.submitted.set(true);
    this.contactForm.reset();
  }

  sendAnother(): void {
    this.submitted.set(false);
  }
}