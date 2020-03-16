import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  newCourse = this.fb.group({
    name:['',Validators.required],
    duration: ['',Validators.required],
    fee: ['', Validators.required],
    startDate: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
  }

  addCourse(){
    this.courseService.addCourse(this.newCourse).subscribe((res)=>{
      if(res){
        alert(`${res.name} added successfully`);
      }
    }, (error: any) => {
        console.log(`Error: ${error}`);
      });
    }
  }
