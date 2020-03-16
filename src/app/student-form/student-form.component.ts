import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { CourseService } from'../course.service';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  courses;

  newStudent = this.fb.group({
    name: ["name", Validators.required],
    age: [12, Validators.required],
    class: ["class", Validators.required],
    section: ["section", Validators.required],
    address: ["address", Validators.required],
    courseId: [1, Validators.required],
  });

  constructor(
    private fb : FormBuilder,
    private route : Router,
    private service : StudentService,
    private courseService: CourseService
    ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe((res) => {
      if (res) {
        this.courses = res;
      }
    });
  }

  addStudent(): void {

    if (this.newStudent){
      this.service.addStudent(this.newStudent).subscribe((res:any) => {
        if(res){
          alert(`Student added successfully with id ${res.id}`);
          this.route.navigate(['/student']);
        }
      }, (error: any) => {
        console.log(`Error:`, error);
      })
    }
  }

}
