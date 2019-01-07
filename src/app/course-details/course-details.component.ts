import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  indexId: any;
  courseNumber: any;
  courseTitle: any;

  constructor(private modalService : NzModalService) { }
  i = 1;
  editCache = {};
  dataSet = [];
  isVisible = false;

  deleteBtn: boolean = true;
  startEdit(key: string): void {
    this.editCache[key].edit = true;
    this.deleteBtn = false;
  }

  cancelEdit(key: string): void {
    this.editCache[key].edit = false;
    this.deleteBtn = true;
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    Object.assign(this.dataSet[index], this.editCache[key].data);
    // this.dataSet[ index ] = this.editCache[ key ].data;
    this.editCache[key].edit = false;
  }

  deleteRow(i: string): void {
    const dataSet = this.dataSet.filter(d => d.key !== i);
    this.dataSet = dataSet;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[item.key]) {
        this.editCache[item.key] = {
          edit: false,
          data: { ...item }
        };
      }
    });
  }

  //Modal

  showDeleteConfirm(event , data, i): void {
    this.indexId  = data.key;
    this.courseTitle = data.courseTitle;
    this.courseNumber = data.courseNumber;
    this.modalService.confirm({
      nzTitle     : 'Are you sure delete this course ?',
      nzContent   : `
      <b>Course Title:</b>
      <a> ${this.courseTitle}</a>
      <br> <b>Course Number : ${this.courseNumber}</b><a></a></p>
      `,
      nzOkText    : 'Yes',
      nzOkType    : 'danger',
      nzOnOk      : ()=>{
        console.log("You have clicked yes!");
        console.log(this.indexId);
        const dataSet = this.dataSet.filter(d => d.key !== this.indexId);
        this.dataSet = dataSet;
      },
      nzCancelText: 'No',
      nzOnCancel  : () => {
          this.isVisible = false;
          console.log("You have cancelled");
      }
    });
  }

  // Modal end.

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.dataSet.push({
        key: i.toString(),
        courseTitle: `Numerical Analysis ${i}`,
        courseNumber: 401,
        Class: `BSSE ${i}`,
        Semister: 2
      });
    }
    this.updateEditCache();
  }

}

