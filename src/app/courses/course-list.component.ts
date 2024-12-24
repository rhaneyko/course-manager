import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

import { Course } from './course';
import { StarComponent } from '../assets/star/star.component';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, StarComponent, FormsModule],
  templateUrl: './course-list.component.html',
})
export class CourseListComponent {
  _courses: Course[] = [];
  filteredCourses: Course[] = [];
  _filterBy: string = '';

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
  get filter() {
    return this._filterBy;
  }
}
