import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-edit-student-details',
  templateUrl: './edit-student-details.component.html',
  styleUrls: ['./edit-student-details.component.scss']
})
export class EditStudentDetailsComponent implements OnInit {
  student;
  courses: Course[];

  editedStudent = this.fb.group({
    name: ['', Validators.required],
    age: [, Validators.required],
    class: ['', Validators.required],
    section: ['', Validators.required],
    address: ['', Validators.required],
    courseId: [, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route : ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getStudent();
    this.getCourses();
  }

  editStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.editStudent(id, this.editedStudent).subscribe(res => {
      if(res){
        alert('student edited successfully!')
        this.router.navigate(['/student']);
      }
    });
  }

  getCourses() {
    this.courseService.getCourses().subscribe((res) => {
      if(res){
        this.courses = res;
      }
    });
  }

  getStudent(): any {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id).subscribe((res) => {
      this.editedStudent.patchValue(res);
      console.log(this.editedStudent.value);
    });
  }


}
