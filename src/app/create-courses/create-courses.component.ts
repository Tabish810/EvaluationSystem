import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.scss']
})
export class CreateCoursesComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }
  submitForm(e: MouseEvent, value): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(value);
  }
  courseList: Array<any> = [
    { name: 'BSSE', semisters: [1,2,3,4,5,6,7,8] },
    { name: 'BSCS', semisters: [1,2,3,4,5,6,7,8] },
    { name: 'MCS', semisters: [1,2,3,4] },
  ];
  semisters: Array<any>;
  changeSemisters(count) {
    this.semisters = this.courseList.find(con => con.name == count).semisters;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      courseTitle: ['', [Validators.required]],
      courseNumber: [null, [Validators.required]],
      creditHours: [null, [Validators.required]],
      Semister: [null, [Validators.required]],
      program: [null, [Validators.required]],
    });
  }
}
