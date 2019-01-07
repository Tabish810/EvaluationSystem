import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';


@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss']
})
export class TeacherDetailsComponent implements OnInit {
  
  indexId: any;
  isVisible = false;

  constructor(private modalService : NzModalService) { }

  i = 1;
  editCache = {};
  dataSet = [];
  deleteBtn: boolean = true;
  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
    this.deleteBtn = false;
  }

  cancelEdit(key: string): void {
    this.editCache[ key ].edit = false;
    this.deleteBtn = true;
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    Object.assign(this.dataSet[ index ], this.editCache[ key ].data);
    // this.dataSet[ index ] = this.editCache[ key ].data;
    this.editCache[ key ].edit = false;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          data: { ...item }
        };
      }
    });
  }
  //Modal

  showDeleteConfirm(event , data, i): void {
    this.indexId  = data.key;
    this.modalService.confirm({
      nzTitle     : 'Are you sure delete this task ?',
      nzContent   : `
      <b>Name :</b>
      <a> ${data.teacher_name}</a>
      <br> <b>Contact Number : ${data.contact_number}</b><a></a></p>
      `,
      nzOkText    : 'Yes',
      nzOkType    : 'danger',
      nzOnOk      : ()=>{
        const dataSet = this.dataSet.filter(d => d.key !== this.indexId);
        this.dataSet = dataSet;
      },
      nzCancelText: 'No',
      nzOnCancel  : () => {
          this.isVisible = false;
      }
    });
  }



  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.dataSet.push({
        key    : i.toString(),
        teacher_name   : `ABC ${i}`,
        father_name    : 'XYZ',
        designation: `London Park no. ${i}`,
        qualification: 'Professor',
        contact_number: 3102344810,
      });
    }
    this.updateEditCache();
  }

}
