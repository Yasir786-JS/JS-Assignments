import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  student;

  constructor(
    private route: ActivatedRoute,
    private service: StudentService,
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }
  getStudent():void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getStudent(id).subscribe((res) => {
      this.student = res;
    });
  }

}
