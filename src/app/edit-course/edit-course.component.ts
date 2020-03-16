import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  editedCourse = this.fb.group({
    name: ['', Validators.required],
    duration: ['', Validators.required],
    fee: ['', Validators.required],
    startDate: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route : ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {

    this.getCourse();
  }

  editCourse(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.editCourse(id,this.editedCourse).subscribe(res=>{
      if(res){
        alert('Course edited successfully!');
        this.router.navigate(['/courses']);
      }
    })
  }

  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id).subscribe((res) => {
      this.editedCourse.patchValue(res);
    });
  }


}
