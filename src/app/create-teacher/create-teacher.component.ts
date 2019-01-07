import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent implements OnInit {
  validateTeacherForm: FormGroup;

  constructor(private fbt: FormBuilder) {
  }
  numberValidator = (control: FormControl): { [s: string]: boolean } => {
    // const NUMBER_REGEXP =	/^\d{3}-\d{3}-\d{4}$/;
    const NUMBER_REGEXP =/^([+]*\d[\ x]*){11,13}$/;
    if (!control.value) {
      return { required: true };
    } else if (!NUMBER_REGEXP.test(control.value)) {
      return { error: true, number: true };
    }
  };
  submitTeacherForm(): void {
    for (const i in this.validateTeacherForm.controls) {
      this.validateTeacherForm.controls[ i ].markAsDirty();
      this.validateTeacherForm.controls[ i ].updateValueAndValidity();
    }
  }
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateTeacherForm.reset();
    for (const key in this.validateTeacherForm.controls) {
      this.validateTeacherForm.controls[ key ].markAsPristine();
      this.validateTeacherForm.controls[ key ].updateValueAndValidity();
    }
  }
  ngOnInit(): void {
    this.validateTeacherForm = this.fbt.group({
      teacher_name: [ '', [ Validators.required ] ],
      fname: [ '', [ Validators.required ] ],
      designation: [ null, [ Validators.required ] ],
      qualification: [ '', [ Validators.required ] ],
      contact_no: [ null, [this.numberValidator] ],
    });
  }
}

